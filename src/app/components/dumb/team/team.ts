import { Component, inject, input} from '@angular/core';
import { ScrollAnimationDirective } from '@shared/directives/scroll-animation.directive';
import { Button } from '@shared/ui/button/button';
import { Carousel, } from '@shared/ui/carousel/carousel';
import { ResponsiveService } from '@services/responsive';
import { CarouselItem } from '@shared/interfaces/slider-item';


@Component({
  selector: 'app-team-dumb',
  imports: [Button, Carousel, ScrollAnimationDirective],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team {
  private responsiveService = inject(ResponsiveService);
  data = input<CarouselItem[]>([]);
  carouselConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    positionArrow: '40%',
    positionArrowRightLeft: '-3rem',
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    infinite: true
  };

  currentConfig = this.responsiveService.getResponsiveConfig(this.carouselConfig, [
    { maxWidth: 600, slidesToShow: 1, positionArrowRightLeft: '-1rem' },
    { maxWidth: 1000, slidesToShow: 2, positionArrowRightLeft: '-2rem'}
  ]);
  


}


