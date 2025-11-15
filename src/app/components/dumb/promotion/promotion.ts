import { Component, input, signal } from '@angular/core';
import { CarouselConfig, CarouselItem} from '@shared/interfaces/slider-item';
import {  Carousel } from "@shared/ui/carousel/carousel";
import { ScrollAnimationDirective } from '@shared/directives/scroll-animation.directive';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-promotion-dumb',
  imports: [Button, ScrollAnimationDirective, Carousel],
  templateUrl: './promotion.html',
  styleUrl: './promotion.scss'
})
export class Promotion {
  data = input<CarouselItem[]>([]);
  carouselConfig = signal<CarouselConfig>({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        infinite: true
  });
}
