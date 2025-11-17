import { Component, inject } from '@angular/core';
import { CardServicesDumb } from '@components/dumb/card-services/card-services';
import { MetaService } from '@services/meta.service';
import { ServicesCard } from '@shared/interfaces/services-card';
import { TitlePage } from "@shared/ui/title-page/title-page";

@Component({
  selector: 'app-about-services',
  imports: [CardServicesDumb, TitlePage],
  templateUrl: './about-services.html',
  styleUrl: './about-services.scss',
})
export class AboutServices {
  private metaService = inject(MetaService);
  constructor() {
    this.metaService.setMetaTags({
      title: 'Услуги массажного салона Loya Massage Studio в Минске',
      description:
        'Профессиональные массажные услуги в Минске: массаж тела, коррекция фигуры и массаж лица. ' +
        'Полный прайс-лист. Видео-обзоры всех процедур. Запишитесь онлайн или по телефону.',
      keywords:
        'массаж Минск, прайс на массаж, коррекция фигуры, массаж лица, ' +
        'стоимость массажа, Loya Massage Studio услуги, антицеллюлитный массаж, ' +
        'релакс массаж, видео массажа, запись на массаж',
      image: '/assets/images/massage/classical.webp',
    });
  }
  services: ServicesCard[] = [
    {
      title: 'Массаж тела',
      id: '1nylfc',
      preload: '',
      videoUrl: 'assets/videos/massage1.mp4',
      videoWebMUr: 'assets/videos/massage1.webm',
      posterImage: 'assets/images/services/video1.png',
      serviceGroups: [
        {
          name: 'КЛАССИЧЕСКИЙ',
          services: [
            { duration: '60 МИН.', price: '80 РУБ.' },
            { duration: '90 МИН.', price: '100 РУБ.' },
          ],
        },
        {
          name: 'СПОРТИВНЫЙ',
          services: [
            { duration: '60 МИН.', price: '90 РУБ.' },
            { duration: '90 МИН.', price: '110 РУБ.' },
          ],
        },
        {
          name: 'СУХОЙ (БЕЗ МАСЛА)',
          services: [
            { duration: '60 МИН.', price: '90 РУБ.' },
            { duration: '90 МИН.', price: '110 РУБ.' },
          ],
        },
        {
          name: 'RELAX МАССАЖ',
          services: [
            { duration: '60 МИН.', price: '80 РУБ.' },
            { duration: '90 МИН.', price: '100 РУБ.' },
          ],
        },
        {
          name: 'ДЛЯ БЕРЕМЕННЫХ',
          services: [{ duration: '60 МИН.', price: '90 РУБ.' }],
        },
        {
          name: 'МАССАЖ СПИНЫ И ШЕИ',
          services: [{ duration: '30 МИН.', price: '50 РУБ.' }],
        },
        {
          name: 'МАССАЖ СПИНЫ, ШЕИ И ДЕКОЛЬТЕ',
          services: [{ duration: '40 МИН.', price: '65 РУБ.' }],
        },
        {
          name: 'ПАРНЫЙ МАССАЖ',
          services: [
            { duration: '60 МИН.', price: '140 РУБ.' },
            { duration: '90 МИН.', price: '180 РУБ.' },
          ],
        },
        {
          name: 'АВТОРСКИЙ',
          services: [{ duration: '70 МИН.', price: '110 РУБ.' }],
          isAuthor: true,
        },
        {
          name: 'МАССАЖ ТРИГГЕРНЫХ ТОЧЕК',
          services: [
            { duration: '60 МИН.', price: '100 РУБ.' },
            { duration: '90 МИН.', price: '120 РУБ.' },
          ],
          isAuthor: true,
        },
      ],
    },
    {
      title: 'Коррекция фигуры',
      id: 'ct0jtu',
      preload: 'none',
      videoUrl: 'assets/videos/massage2.mp4',
      videoWebMUr: 'assets/videos/massage2.wepb',
      posterImage: 'assets/images/services/video2.png',
      serviceGroups: [
        {
          name: 'АНТИЦЕЛЛЮЛИТНЫЙ',
          services: [
            { duration: '60 МИН.', price: '90 РУБ.' },
            { duration: '75 МИН.', price: '110 РУБ.' },
          ],
        },
        {
          name: 'ЛИМФОДРЕНАЖНЫЙ',
          services: [
            { duration: '60 МИН.', price: '80 РУБ.' },
            { duration: '90 МИН.', price: '100 РУБ.' },
          ],
        },
      ],
    },
    {
      title: 'Массаж лица',
      id: 'x3x64i',
      preload: 'none',
      videoUrl: 'assets/videos/massage3.mp4',
      videoWebMUr: 'assets/videos/massage3.wepb',
      posterImage: 'assets/images/services/video3.png',
      serviceGroups: [
        {
          name: 'Лицо, шея, декольте',
          services: [
            { duration: '45 МИН.', price: '70 РУБ.' },
            { duration: '60 МИН.', price: '90 РУБ.' },
          ],
        },
        {
          name: 'Лицо + спина',
          services: [{ duration: '70 МИН.', price: '100 РУБ.' }],
        },
      ],
    },
  ];
}