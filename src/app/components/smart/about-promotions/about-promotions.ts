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
        'Специальные предложения для новых клиентов: скидка 20 BYN на первый массаж. ' +
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
            <strong>дарим скидку 20 рублей</strong>  
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
    {
      id: 2,
      title: 'Выгодные абонементы на массаж',
      image: 'assets/images/promotions/2.webp',
      htmlContent: `
      <p class="text-gray-700">Приобретая курс массажа, вы не только заботитесь о своем здоровье, но и получаете <span class="font-semibold">существенную скидку</span> на все процедуры.</p>
      
      <h4 class="font-bold text-gray-700 mt-6">5 сеансов = 5% скидки</h4>
      <ul class="space-y-2 text-gray-700">
        <li>30 минут: <s>50р</s> → <span class="font-medium">48р</span> за сеанс (экономия 10р)</li>
        <li>45 минут: <s>70р</s> → <span class="font-medium">66р</span> за сеанс (экономия 20р)</li>
        <li>60 минут: <s>80р</s> → <span class="font-medium">76р</span> за сеанс (экономия 20р)</li>
        <li>90 минут: <s>100р</s> → <span class="font-medium">95р</span> за сеанс (экономия 25р)</li>
      </ul>
      <p class="mt-2 text-gray-700">Итоговая стоимость курса: <span class="font-medium">от 240р</span> (вместо <s>250р</s>)</p>
      
      <h4 class="font-bold text-gray-700 mt-6">10 сеансов = 10% скидки</h4>
      <ul class="space-y-2 text-gray-700">
        <li>30 минут: <s>50р</s> → <span class= font-medium">45р</span> за сеанс (экономия 50р за курс)</li>
        <li>45 минут: <s>70р</s> → <span class= font-medium">63р</span> за сеанс (экономия 70р за курс)</li>
        <li>60 минут: <s>90р</s> → <span class="font-medium">81р</span> за сеанс (экономия 90р за курс)</li>
        <li>90 минут: <s>100р</s> → <span class="font-medium">90р</span> за сеанс (экономия 100р за курс)</li>
      </ul>
      <p class="mt-2 text-gray-700">Итоговая стоимость курса: <span class=" font-medium">от 450р</span> (вместо <s>500р</s>)</p>
      `,
      isLimited: true,
      actionText: 'Запишитесь онлайн или по телефону +375(33) 390-30-52',
    },
  ];
}
