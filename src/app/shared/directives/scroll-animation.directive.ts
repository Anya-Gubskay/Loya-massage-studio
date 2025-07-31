import { 
    Directive, 
    ElementRef, 
    Renderer2, 
    OnInit, 
    OnDestroy,
    HostBinding,
    Inject,
    PLATFORM_ID,
    Input
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type AnimationType = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom' | 'rotate' | 'flip' | 'bounce' | 'smooth-fade' | 'gentle-slide' | 'soft-scale';
type EasingFunction = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | string;

@Directive({
    selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
    @Input() animationType: AnimationType = 'gentle-slide';
    @Input() animationDuration: number = 1500; // Увеличенная длительность для плавности
    @Input() animationDelay: number = 0;
    @Input() threshold: number = 0.1;
    @Input() disableOnMobile: boolean = true;
    @Input() easing: EasingFunction = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Очень плавная кривая
    @Input() distance: number = 30; // Оптимальное расстояние
    @Input() scale: number = 0.9; // Небольшое начальное масштабирование
    @Input() rotateDegree: number = 5; // Минимальный угол
    
    @HostBinding('style.opacity') opacity = '0';
    @HostBinding('style.transform') transform = '';
    @HostBinding('style.transition') transition = '';
    @HostBinding('style.will-change') willChange = 'transform, opacity';
    @HostBinding('style.backface-visibility') backfaceVisibility = 'hidden';
    @HostBinding('style.perspective') perspective = '1000px';
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.transform-origin') transformOrigin = 'center';

    private observer: IntersectionObserver | null = null;
    private isMobile = false;
    private hasAnimated = false;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {}

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.checkMobile();
            this.setupInitialState();
            
            if (!(this.disableOnMobile && this.isMobile)) {
                this.setupIntersectionObserver();
            } else {
                this.animateIn(); // Показываем сразу на мобильных, если отключено
            }
        }
    }

    private checkMobile(): void {
        this.isMobile = window.innerWidth <= 768;
    }

    private setupInitialState(): void {
        // Устанавливаем начальные стили без transition
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'none');
        this.setupTransform();
        
        // Применяем transition после установки начального состояния
        setTimeout(() => {
            this.transition = this.getTransitionString();
            this.renderer.setStyle(this.el.nativeElement, 'transition', this.transition);
        }, 50);
    }

    private setupTransform(): void {
        switch (this.animationType) {
            case 'fade':
                this.opacity = '0';
                break;
            case 'smooth-fade':
                this.opacity = '0';
                this.transform = `scale(${this.scale})`;
                break;
            case 'gentle-slide':
                this.opacity = '0';
                this.transform = `translate3d(0, ${this.distance}px, 0)`;
                break;
            case 'slide-up':
                this.transform = `translate3d(0, ${this.distance}px, 0)`;
                break;
            case 'slide-down':
                this.transform = `translate3d(0, -${this.distance}px, 0)`;
                break;
            case 'slide-left':
                this.transform = `translate3d(${this.distance}px, 0, 0)`;
                break;
            case 'slide-right':
                this.transform = `translate3d(-${this.distance}px, 0, 0)`;
                break;
            case 'zoom':
                this.transform = `scale3d(${this.scale}, ${this.scale}, 1)`;
                break;
            case 'soft-scale':
                this.opacity = '0';
                this.transform = `scale3d(${this.scale}, ${this.scale}, 1)`;
                break;
            case 'rotate':
                this.transform = `rotate(${this.rotateDegree}deg)`;
                break;
            case 'flip':
                this.transform = 'rotateY(90deg)';
                break;
            case 'bounce':
                this.transform = 'translate3d(0, 100px, 0)';
                break;
            default:
                this.transform = '';
                break;
        }
    }

    private getTransitionString(): string {
        switch (this.animationType) {
            case 'smooth-fade':
                return `opacity ${this.animationDuration}ms cubic-bezier(0.39, 0.575, 0.565, 1) ${this.animationDelay}ms, transform ${this.animationDuration}ms cubic-bezier(0.39, 0.575, 0.565, 1) ${this.animationDelay}ms`;
            case 'gentle-slide':
                return `opacity ${this.animationDuration}ms ease-out ${this.animationDelay}ms, transform ${this.animationDuration}ms cubic-bezier(0.19, 1, 0.22, 1) ${this.animationDelay}ms`;
            case 'soft-scale':
                return `opacity ${this.animationDuration}ms ease-out ${this.animationDelay}ms, transform ${this.animationDuration}ms cubic-bezier(0.175, 0.885, 0.32, 1.1) ${this.animationDelay}ms`;
            case 'bounce':
                return `transform ${this.animationDuration}ms cubic-bezier(0.47, 1.64, 0.41, 0.8), opacity ${this.animationDuration}ms ease-out`;
            default:
                return `all ${this.animationDuration}ms ${this.easing} ${this.animationDelay}ms`;
        }
    }

    private setupIntersectionObserver(): void {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animateIn();
                    this.hasAnimated = true;
                    
                    if (this.animationType !== 'bounce') {
                        this.observer?.unobserve(entry.target);
                    }
                }
            });
        }, {
            threshold: this.threshold,
            rootMargin: '0px 0px -20% 0px' // Начинаем анимацию немного раньше
        });

        this.observer.observe(this.el.nativeElement);
    }

    private animateIn(): void {
        this.opacity = '1';
        this.transform = this.getFinalTransform();

        if (this.animationType === 'bounce') {
            this.applyBounceAnimation();
        }
    }

    private applyBounceAnimation(): void {
        setTimeout(() => {
            this.transform = 'translate3d(0, -20px, 0)';
            
            setTimeout(() => {
                this.transform = 'translate3d(0, 10px, 0)';
                
                setTimeout(() => {
                    this.transform = 'translate3d(0, 0, 0)';
                }, this.animationDuration * 0.3);
            }, this.animationDuration * 0.6);
        }, 10);
    }

    private getFinalTransform(): string {
        switch (this.animationType) {
            case 'fade':
                return '';
            case 'smooth-fade':
            case 'soft-scale':
                return 'scale3d(1, 1, 1)';
            case 'gentle-slide':
            case 'slide-up': 
            case 'slide-down': 
            case 'slide-left':
            case 'slide-right': 
                return 'translate3d(0, 0, 0)';
            case 'zoom': 
                return 'scale3d(1, 1, 1)';
            case 'rotate': 
                return 'rotate(0)';
            case 'flip': 
                return 'rotateY(0)';
            case 'bounce': 
                return 'translate3d(0, -20px, 0)';
            default: 
                return '';
        }
    }

    ngOnDestroy(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}