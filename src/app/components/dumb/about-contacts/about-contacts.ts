import { Component, inject, input } from '@angular/core';
import { MetaService } from '@services/meta.service';
import { Contacts } from '../contacts/contacts';

@Component({
  selector: 'app-about-contacts-dumb',
  imports: [Contacts],
  templateUrl: './about-contacts.html',
})
export class AboutContactsDumb {
  private metaService = inject(MetaService)
  constructor() {
    this.metaService.setMetaTags({
        title: 'Контакты массажного салона Loya Massage в Минске',
        description: '📍 Адрес: ул. Короля, 9. 🕒 Работаем с 9:00 до 21:00 без выходных. ☎ +375 (33) 390-30-52. Карта проезда, фото входа, онлайн-запись.',
        keywords: 'контакты Loya Massage, адрес массажного салона Минск, телефон, как доехать, график работы',
        image: '/assets/images/contacts.png',
    });
  }
}
