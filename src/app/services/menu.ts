import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class MenuService {
  private mockMenuItems = [
    { id: 'home', title: 'Главная', icon: 'home', route: '/' , routeForMobile: '/'},
    { id: 'about', title: 'О нас', icon: 'info', route: '/about', routeForMobile: '/about-sliders' },
    { id: 'services', title: 'Наши услуги', icon: 'spa', route: '/services', routeForMobile: '/services'},
    { id: 'team', title: 'Команда', icon: 'people', route: '/team', routeForMobile: '/team' },
    { id: 'promo', title: 'Акции', icon: 'local_offer', route: '/promotions', routeForMobile: '/promotions' },
    { id: 'certs', title: 'Сертификаты', icon: 'card_giftcard', route: '/certificates', routeForMobile: '/certificates'},
    { id: 'reviews', title: 'Отзывы', icon: 'star', route: '/reviews', routeForMobile: '/reviews'},
    { id: 'contacts', title: 'Контакты', icon: 'contacts', route: '/contacts', routeForMobile: '/contacts'},
    { id: 'contacts-text', title: 'г.Минск, ул.Короля, 9', icon: 'contacts', route: '/contacts', routeForMobile: '/contscts' }

  ];

  getMenuItems() {
    return of(this.mockMenuItems).pipe(delay(300));
  }
}