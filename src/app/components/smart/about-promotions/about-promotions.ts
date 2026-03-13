import { Component, inject } from '@angular/core';
import { PromoCardDumb } from '@components/dumb/promo-card/promo-card';
import { MetaService } from '@services/meta.service';
import { Promotion } from '@shared/interfaces/promo-card';
import { TitlePage } from '@shared/ui/title-page/title-page';

@Component({
  selector: 'app-about-promotions-smart',
  imports: [PromoCardDumb, TitlePage],
  templateUrl: './about-promotions.html',
  styleUrl: './about-promotions.scss',
})
export class AboutPromotionsSmart {
  private metaService = inject(MetaService);
  constructor() {
    this.metaService.setMetaTags({
      title: 'Акции и спецпредложения | Loya Massage Studio Минск',
      description:
        'Специальные предложения для новых клиентов: скидка до 50 BYN на первый массаж. ' +
        'Выгодные абонементы со скидкой до 10% на курсы массажа. ' +
        'Ограниченные по времени предложения от профессионального массажного салона.',
      keywords:
        'акции массажного салона, скидки на массаж, выгодные абонементы, ' +
        'спецпредложение для новых клиентов, курс массажа со скидкой, ' +
        'Loya Massage Studio акции, экономный массаж Минск, ' +
        'подарочные сертификаты на массаж',
      image: '/assets/images/promotions/1.webp',
    });
  }

  promotions: Promotion[] = [
    {
      id: 1,
      title: 'Специальное предложение для новых клиентов!',
      image: 'assets/images/promotions/1.webp',
      htmlContent: `
        <div>
          <p class="mb-4">
            При первом посещении нашей массажной студии  
            <strong><a href="https://www.instagram.com/p/DTj0T-6DHCm/"
            class='promo-orange-link'"
            >дарим до 50 BYN на первом посещении</a></strong>
            на любой часовой сеанс (кроме парного массажа).
          </p>
  
          <p>Это отличная возможность:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Оценить качество наших процедур</li>
            <li>Познакомиться с нашими специалистами</li>
            <li>Начать путь к расслаблению</li>
          </ul>
          <p class="mt-4">Акция для всех новых клиентов.</p>
        </div>
      `,
      actionText: 'Сообщите "Первое посещение" при записи',
      isLimited: true,
    },
  ];
}
