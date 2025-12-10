import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, Inject, ContentChild, TemplateRef, input} from '@angular/core';
import { CarouselConfig, CarouselItem } from '@shared/interfaces/slider-item';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  slides = input<CarouselItem[]>([]);
  config = input<CarouselConfig>({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    infinite: true,
    positionArrow: '30%',
    positionArrowRightLeft: '0'
  });

  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<any>;

  currentIndex = 0;
  private autoplaySub!: Subscription;
  protected transitionEnabled = true;
  private isBrowser: boolean;

  

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  

  ngOnInit(): void {
    if (this.config().autoplay && this.isBrowser) {
      this.startAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  get extendedSlides(): any[] {
    if (!this.config().infinite || this.slides().length <= this.config().slidesToShow!) {
      return this.slides();
    }

    return [
      ...this.slides().slice(-this.config().slidesToShow!),
      ...this.slides(),
      ...this.slides().slice(0, this.config().slidesToShow!)
    ];
  }

get transformStyle(): string {
    const config = this.config();
    const slidesLength = this.slides().length;
    const slidesToShow = config.slidesToShow!;

    // Если количество слайдов <= slidesToShow, трансформации не нужны.
    if (slidesLength <= slidesToShow) {
      return `translateX(0%)`;
    }

    // Логика для бесконечной карусели
    const offset = config.infinite ? slidesToShow : 0;
    
    // Проверяем, что делитель (slidesToShow) не равен нулю, хотя это и так должно быть гарантировано конфигом.
    if (slidesToShow === 0) return `translateX(0%)`; 

    // Используем this.currentIndex, который управляет позицией.
    // Если слайдов мало, этот код не выполнится благодаря проверке выше.
    return `translateX(-${(this.currentIndex + offset) * (100 / slidesToShow)}%)`;
  }
  
  next(): void {
    this.transitionEnabled = true;
    this.currentIndex += this.config().slidesToScroll!;

    if (this.config().infinite && this.currentIndex >= this.slides().length) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = 0;
      }, 500);
    } else if (!this.config().infinite) {
      this.currentIndex = Math.min(this.currentIndex, this.slides().length - this.config().slidesToShow!);
    }
    this.resetAutoplay();
  }

  prev(): void {
    this.transitionEnabled = true;
    this.currentIndex -= this.config().slidesToScroll!;

    if (this.config().infinite && this.currentIndex < -this.config().slidesToShow!) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = this.slides().length - this.config().slidesToShow!;
      }, 500);
    } else if (!this.config().infinite) {
      this.currentIndex = Math.max(0, this.currentIndex);
    }
    this.resetAutoplay();
  }

  goTo(index: number): void {
    this.transitionEnabled = true;
    this.currentIndex = index;
    this.resetAutoplay();
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    this.autoplaySub = interval(this.config().autoplaySpeed!).subscribe(() => this.next());
  }

  private stopAutoplay(): void {
    if (this.autoplaySub) {
      this.autoplaySub.unsubscribe();
    }
  }

  private resetAutoplay(): void {
    if (this.config().autoplay) {
      this.startAutoplay();
    }
  }

  get showArrows(): boolean {
    return this.config().arrows! && this.slides().length > this.config().slidesToShow!;
  }

  get showDots(): boolean {
    return this.config().dots! && this.slides().length > this.config().slidesToShow!;
  }

  get realIndex(): number {
    if (this.currentIndex < 0) {
      return (this.slides().length + (this.currentIndex % this.slides().length)) % this.slides().length;
    }
    return this.currentIndex % this.slides().length;
  }
}

