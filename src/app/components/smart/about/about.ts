import { Component, signal } from '@angular/core';
import { Carousel } from "@shared/ui/carousel/carousel";
import { CarouselConfig} from '@shared/interfaces/slider-item';
import { ScrollAnimationDirective } from '@shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-about-smart',
  imports: [Carousel, ScrollAnimationDirective, Carousel],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutSmart {
  data= signal([{photo: 'assets/images/studio/1.webp', alt: 'интерьер 1'},{photo: 'assets/images/studio/1-night.webp', alt: 'интерьер вечерний 1'}, {photo: 'assets/images/studio/2.webp', alt: 'интерьер 2'},{photo: 'assets/images/studio/2-night.webp', alt: 'интерьер вечерний 2'}, {photo: 'assets/images/studio/3.webp', alt: 'интурьер 3'}, {photo: 'assets/images/studio/3-night.webp', alt: 'интерьер вечерний 3'}]);
    carouselConfig = signal<CarouselConfig>({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
      infinite: true
    });
}
