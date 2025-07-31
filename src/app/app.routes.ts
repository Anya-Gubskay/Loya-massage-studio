import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/smart/main/main.smart').then(m => m.MainSmart),
    title: 'Главная'
  },
  {
    path: 'about',
    loadComponent: () => import('./components/smart/about-gallery/about-gallery').then(m => m.AboutGallerySmart),
    title: 'О нас',
    data: {
      meta: {
        title: 'Фото нашего салона | Loya Massage Studio',
        description: 'Фотогалерея массажного салона Loya. Интерьеры, рабочие зоны и атмосфера нашего пространства.',
        keywords: 'фото массажного салона, интерьер студии массажа, атмосфера Loya Massage',
        image: "assets/images/about-studio/1.webp"
      }
    }
  },
  {
    path: 'about-sliders',
    loadComponent: () => import('./components/dumb/about-page/about-page').then(m => m.AboutPageDumb),
    title: 'О нас',
    data: {
      meta: {
        title: 'О нашем салоне массажа в Минске | Loya Massage Studio',
        description: 'Loya Massage Studio - это профессиональный подход к релаксации. Наша философия, принципы работы и преимущества.',
        keywords: 'о массажном салоне, философия Loya Massage, наши принципы',
        image: 'assets/images/about-studio/1.webp'
      }
    }
  },
  {
    path: 'services',
    loadComponent: () => import('./components/smart/about-services/about-services').then(m => m.AboutServices),
    title: 'Наши услуги',
    data: {
      meta: {
        title: 'Услуги массажа | Loya Massage Studio',
        description: 'Полный перечень массажных услуг: классический, спортивный, антицеллюлитный, релакс и другие виды массажа.',
        keywords: 'виды массажа, услуги массажного салона, прайс на массаж',
        image: 'assets/images/services-preview.webp'
      }
    }
  },
  {
    path: 'team',
    loadComponent: () => import('./components/smart/about-team/about-team').then(m => m.AboutTeamSmart),
    title: 'Команда',
    data: {
      meta: {
        title: 'Наши мастера | Профессиональные массажисты Loya',
        description: 'Команда сертифицированных массажистов Loya Massage Studio. Большой опыт работы.',
        keywords: 'массажисты Минск, наши специалисты, сертифицированные мастера',
        image: 'assets/images/team/nikita.webp'
      }
    }
  },
  {
    path: 'reviews',
    loadComponent: () => import('./components/smart/reviews/reviews').then(m => m.ReviewsSmart),
    title: 'Отзывы',
    data: {
      meta: {
        title: 'Отзывы о нашем салоне | Loya Massage Studio',
        description: 'Реальные отзывы клиентов о массаже в нашем салоне. Фотоотчеты и видео-мнения.',
        keywords: 'отзывы о массаже, мнения клиентов, оценки массажного салона',
        image: 'assets/images/reviews/6.webp'
      }
    }
  },
  {
    path: 'promotions',
    loadComponent: () => import('./components/smart/about-promotions/about-promotions').then(m => m.AboutPromotionsSmart),
    title: 'Акции',
    data: {
      meta: {
        title: 'Акции и скидки | Loya Massage Studio',
        description: 'Специальные предложения на массаж: скидки для новых клиентов, выгодные абонементы, сезонные акции.',
        keywords: 'акции массажного салона, скидки на массаж, спецпредложения',
        image: '/assets/images/promotions/1.webp'
      }
    }
  },
  {
    path: 'certificates',
    loadComponent: () => import('./components/dumb/about-certificate/about-certificate').then(m => m.AboutCertificateDumb),
    title: 'Сертификат',
    data: {
      meta: {
        title: 'Подарочные сертификаты на массаж | Loya Massage',
        description: 'Электронные и печатные сертификаты на массажные процедуры. Идеальный подарок для близких.',
        keywords: 'подарочный сертификат на массаж, купить сертификат',
        image: 'assets/images/certificate.png'
      }
    }
  },
  {
    path: 'contacts',
    loadComponent: () => import('./components/dumb/about-contacts/about-contacts').then(m => m.AboutContactsDumb),
    title: 'Контакты',
    data: {
      meta: {
        title: 'Контакты | Loya Massage Studio',
        description: 'Адрес, телефон, карта проезда. Работаем ежедневно с 9:00 до 21:00.',
        keywords: 'контакты массажного салона Минск, адрес Loya Massage, телефон, как добраться',
        image: 'assets/images/ccontacts.png'
      }
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];