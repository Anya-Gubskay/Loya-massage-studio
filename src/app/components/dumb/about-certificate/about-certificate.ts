import { Component, inject, input } from '@angular/core';
import { MetaService } from '@services/meta.service';
import { Certificate } from '../certificate/certificate';


@Component({
  selector: 'app-about-certificate-dumb',
  imports: [Certificate],
  templateUrl: './about-certificate.html',
})
export class AboutCertificateDumb {
  private metaService = inject(MetaService)
  constructor() {
    this.metaService.setMetaTags({
      title: 'Подарочный сертификат на массаж | Loya Massage Studio Минск',
      description: '💝 Сертификат на массаж от 50 BYN - идеальный подарок. ' + 
                  'Оформите онлайн или в студии по адресу: ул. Короля 9, Минск. ' +
                  'Выбор количества сеансов, электронная или печатная версия.',
      keywords: 'подарочный сертификат на массаж, купить сертификат массажа Минск, ' +
               'Loya Massage сертификат, подарок на релакс, сертификат на спа-процедуры, ' +
               'электронный сертификат массажа',
      image: '/assets/images/certificate.png'
    });
  }
}
