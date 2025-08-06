import { Component, signal } from '@angular/core';
import { MainDumb } from "@components/dumb/main/main";
import { Promotion } from "@components/dumb/promotion/promotion";
import { Certificate } from '@components/dumb/certificate/certificate';
import { Team } from '@components/dumb/team/team';
import { Contacts } from '@components/dumb/contacts/contacts';
import { CardImage } from '@shared/interfaces/card-image';
import { ServicesGalleryComponent } from '@components/dumb/services/services';
import { AboutSmart } from '@components/smart/about/about';
import { CarouselItem } from '@shared/interfaces/slider-item';


@Component({
  selector: 'app-main-smart',
  imports: [ServicesGalleryComponent, Team, Promotion, Certificate, Contacts, AboutSmart, MainDumb, Promotion],
  templateUrl: './main.smart.html',
  styleUrl: './main.smart.scss'
})
export class MainSmart {
  
  carouselPromotionContent= signal< CarouselItem[]>([{photo: 'assets/images/promotions/1.webp', alt: 'акции на первое посещение'}, {photo: 'assets/images/promotions/2.webp', alt: 'скидка по абонементу'}]);
  carouselTeamContent = signal< CarouselItem[]>([
    { 
      name: 'НИКИТА', 
      role: 'ТОП-МАСТЕР', 
      photo: '/assets/images/team/nikita.webp',
      alt: 'Никаита'
    },
    { 
      name: 'ДМИТРИЙ', 
      role: 'ТОП-МАСТЕР', 
      photo: '/assets/images/team/dima.webp',
      alt: 'Дмитрий'
    },
    { 
      name: 'ЮЛИЯ', 
      role: 'МАСТЕР', 
      photo: '/assets/images/team/juliya.webp',
      alt: 'Юлия'
    },
    { 
      name: 'АНДРЕЙ', 
      role: 'МАСТЕР', 
      photo: '/assets/images/team/andrey.webp',
      alt: 'Андрей'
    },
    { 
      name: 'ИВАН', 
      role: 'МАСТЕР', 
      photo: '/assets/images/team/ivan.webp',
      alt: 'Иван'
    }
  ]);

  servicesContent = signal<CardImage[]>([
    { 
      title: 'Классический массаж', 
      image: '/assets/images/massage/classical.jpg',
      alt: 'Классический массаж', 
    },
    { 
      title: 'Спортивный массаж', 
      image: '/assets/images/massage/sport.jpg',
      alt: 'Спортивный массаж', 
    },
    { 
      title: 'Коррекция фигуры', 
      image: '/assets/images/massage/correction.jpg',
      alt: 'Коррекция фигуры',  
    },
    { 
      title: 'Массаж для беременных', 
      image: '/assets/images/massage/pregnancy.jpg',
      alt: 'Массаж для беременных',  
    },
    { 
      title: 'Парный массаж', 
      image: '/assets/images/massage/doubles.jpg',
      alt: 'Парный массаж', 
    },
    { 
      title: 'Медитативный массаж', 
      image: '/assets/images/massage/meditation.jpg',
      alt: 'Медитативный массаж', 
    }
  ]);

}
