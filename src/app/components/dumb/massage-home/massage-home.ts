import { Component, input, signal } from "@angular/core";
import { ScrollAnimationDirective } from "@shared/directives/scroll-animation.directive";
import { CarouselConfig, CarouselItem } from "@shared/interfaces/slider-item";
import { Button } from "@shared/ui/button/button";
import { Carousel } from "@shared/ui/carousel/carousel";

@Component({
  selector: 'app-massage-home-dumb',
  imports: [Button, ScrollAnimationDirective, Carousel],
  templateUrl: './massage-home.html',
})
export class MassageHomeDump {
  data = input<CarouselItem[]>([]);
  carouselConfig = signal<CarouselConfig>({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    infinite: true,
  });
}
