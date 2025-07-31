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
    title: 'О нас'
  },
  {
    path: 'about-sliders',
    loadComponent: () => import('./components/smart/about/about').then(m => m.AboutSmart),
    title: 'О нас'
  },
  {
    path: 'services',
    loadComponent: () => import('./components/smart/about-services/about-services').then(m => m.AboutServices),
    title: 'Наши услуги'
  },
  {
    path: 'team',
    loadComponent: () => import('./components/smart/about-team/about-team').then(m => m.AboutTeamSmart),
    title: 'Команда'
  },
  {
    path: 'reviews',
    loadComponent: () => import('./components/smart/reviews/reviews').then(m => m.ReviewsSmart),
    title: 'Отзывы'
  },
  {
    path: 'promotions',
    loadComponent: () => import('./components/smart/about-promotions/about-promotions').then(m => m.AboutPromotionsSmart),
    title: 'Акции'
  },
  {
    path: 'certificates',
    loadComponent: () => import('./components/dumb/certificate/certificate').then(m => m.Certificate),
    title: 'Сертификат'
  },
  {
    path: 'contacts',
    loadComponent: () => import('./components/dumb/contacts/contacts').then(m => m.Contacts),
    title: 'Контакты'
  },
  // Другие маршруты...
  {
    path: '**',
    redirectTo: ''
  }
];