import { Component,inject, signal } from '@angular/core';
import { Carousel } from "@shared/ui/carousel/carousel";
import { Button } from "@shared/ui/button/button";
import { ResponsiveService } from '@services/responsive';
import { TitlePage } from "@shared/ui/title-page/title-page";
import { CarouselItem } from '@shared/interfaces/slider-item';
import { MetaService } from '@services/meta.service';

@Component({
  selector: 'app-reviews-smart',
  imports: [Carousel, Button, TitlePage],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class ReviewsSmart  {
    private metaService = inject(MetaService);
    constructor() {
      this.metaService.setMetaTags({
        title: 'Отзывы клиентов Loya Massage Studio | Реальные мнения о массаже',
        description: 'Реальные отзывы клиентов о массаже в нашем салоне. ' +
                    'Фото-отзывы из Instagram с оценкой качества процедур. ' +
                    'Убедитесь в профессионализме наших мастеров перед записью.',
        keywords: 'отзывы массажный салон Минск, Loya Massage отзывы, ' +
                 'мнения о массаже, Instagram отзывы, оценки клиентов, ' +
                 'реальные впечатления от массажа, фотоотчеты процедур',
        image: '/assets/images/reviews/6.webp',
      });
    }
  private responsiveService = inject(ResponsiveService);
  isBrowser = false;
  carouselConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    infinite: true,
    positionArrowRightLeft: '-3rem'
  };

  currentConfig = this.responsiveService.getResponsiveConfig(this.carouselConfig, [
    { maxWidth: 600, slidesToShow: 1, positionArrowRightLeft: '-1rem' },
    { maxWidth: 1000, slidesToShow: 2, positionArrowRightLeft: '-2rem'}
  ]);
  
reviews = signal<CarouselItem[]>([
    { 
      photo: '/assets/images/reviews/1.webp',
        alt: 'Отзыв 1'
    },
    { 
      photo: '/assets/images/reviews/2.webp',
       alt: 'Отзыв 2'
    },
    { 
      photo: '/assets/images/reviews/3.webp',
      alt: 'Отзыв 3' 
    },
    { 
      photo: '/assets/images/reviews/4.webp',
      alt: 'Отзыв 4' 
    },
    { 
      photo: '/assets/images/reviews/5.webp',
      alt: 'Отзыв 5' 
    },
    { 
      photo: '/assets/images/reviews/6.webp',
      alt: 'Отзыв 6' 
    },
    { 
      photo: '/assets/images/reviews/7.webp',
      alt: 'Отзыв 7' 
    },
    { 
      photo: '/assets/images/reviews/8.webp',
       alt: 'Отзыв 8'
    },
    { 
      photo: '/assets/images/reviews/9.webp',
      alt: 'Отзыв 9' 
    },
    { 
      photo: '/assets/images/reviews/10.webp',
      alt: 'Отзыв 10' 
    },
  ]);
}
