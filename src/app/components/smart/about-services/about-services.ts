import { Component, inject } from '@angular/core';
import { CardServicesDumb } from '@components/dumb/card-services/card-services';
import { MetaService } from '@services/meta.service';
import { ServicesCard } from '@shared/interfaces/services-card';
import { TitlePage } from "@shared/ui/title-page/title-page";

@Component({
  selector: 'app-about-services',
  imports: [CardServicesDumb, TitlePage],
  templateUrl: './about-services.html',
  styleUrl: './about-services.scss'
})
export class AboutServices {
  private metaService = inject(MetaService)
  constructor() {
    this.metaService.setMetaTags({
      title: 'Услуги массажного салона Loya Massage Studio в Минске',
      description: 'Профессиональные массажные услуги в Минске: массаж тела, коррекция фигуры и массаж лица. ' +
                  'Полный прайс-лист 2024 года. Видео-обзоры всех процедур. Запишитесь онлайн или по телефону.',
      keywords: 'массаж Минск, прайс на массаж, коррекция фигуры, массаж лица, ' +
               'стоимость массажа, Loya Massage Studio услуги, антицеллюлитный массаж, ' +
               'релакс массаж, видео массажа, запись на массаж',
      image: '/assets/images/massage/classical.webp',
    });
  }
   services: ServicesCard[]  = [{
    title: "Массаж тела",
    id: '1106478325',
    videoUrl: "https://vimeo.com/1106478325",
    posterImage: 'assets/images/services/video1.png',
    note: "Услуга ТОП-МАСТЕРА + 10р к прайсу",
    disclaimer: "* НЕ РАСПРОСТРАНЯЕТСЯ НА АВТОРСКИЙ МАССАЖ",
    serviceGroups: [
      {
        name: "КЛАССИЧЕСКИЙ",
        services: [
          { duration: "60 МИН.", price: "70 РУБ." },
          { duration: "90 МИН.", price: "90 РУБ." }
        ]
      },
      {
        name: "СПОРТИВНЫЙ",
        services: [
          { duration: "60 МИН.", price: "80 РУБ." },
          { duration: "90 МИН.", price: "100 РУБ." }
        ]
      },
      {
        name: "СУХОЙ (БЕЗ МАСЛА)",
        services: [
          { duration: "60 МИН.", price: "80 РУБ." },
          { duration: "90 МИН.", price: "100 РУБ." }
        ]
      },
      {
        name: "RELAX МАССАЖ",
        services: [
          { duration: "60 МИН.", price: "70 РУБ." },
          { duration: "90 МИН.", price: "90 РУБ." }
        ]
      },
      {
        name: "ДЛЯ БЕРЕМЕННЫХ",
        services: [
          { duration: "60 МИН.", price: "80 РУБ." }
        ]
      },
      {
        name: "МАССАЖ СПИНЫ И ШЕИ",
        services: [
          { duration: "30 МИН.", price: "40 РУБ." }
        ]
      },
      {
        name: "ПАРНЫЙ МАССАЖ",
        services: [
          { duration: "60 МИН.", price: "120 РУБ." },
          { duration: "90 МИН.", price: "160 РУБ." }
        ]
      },
      {
        name: "МЕДИТАТИВНЫЙ МАССАЖ (АВТОРСКИЙ)",
        services: [
          { duration: "60 МИН.", price: "120 РУБ." }
        ],
        isAuthor: true
      }
    ]
  },
  {
    title: "Коррекция фигуры",
    id: "1106478297",
    videoUrl: "https://vimeo.com/1106478297",
    posterImage: 'assets/images/services/video2.png',
    note: "Услуга ТОП-МАСТЕРА + 10р к прайсу",
    disclaimer: "* НЕ РАСПРОСТРАНЯЕТСЯ НА АВТОРСКИЙ МАССАЖ",
    serviceGroups: [
      {
        name: "АНТИЦЕЛЛЮЛИТНЫЙ",
        services: [
          { duration: "60 МИН.", price: "80 РУБ." },
          { duration: "90 МИН.", price: "100 РУБ." }
        ]
      },
      {
        name: "ЛИМФОДРЕНАЖНЫЙ",
        services: [
          { duration: "60 МИН.", price: "70 РУБ." },
          { duration: "90 МИН.", price: "90 РУБ." }
        ]
      }
    ]
  },
  {
    title: "Массаж лица",

    id: "1106478340",
    videoUrl: "https://vimeo.com/1106478340",
    posterImage: 'assets/images/services/video3.png',
    note: "Услуга ТОП-МАСТЕРА + 10р к прайсу",
    disclaimer: "* НЕ РАСПРОСТРАНЯЕТСЯ НА АВТОРСКИЙ МАССАЖ",
    serviceGroups: [
      {
        name: "Лицо, шея, декольте",
        services: [
          { duration: "45 МИН.", price: "60 РУБ." },
          { duration: "60 МИН.", price: "80 РУБ." }
        ]
      },
      {
        name: "Лицо + спина",
        services: [
          { duration: "70 МИН.", price: "90 РУБ." },
        ]
      }
    ]
  }
];
}
