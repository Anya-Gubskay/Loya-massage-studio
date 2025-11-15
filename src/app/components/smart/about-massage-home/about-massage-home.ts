import { Component, inject } from '@angular/core';
import { PromoCardDumb } from '@components/dumb/promo-card/promo-card';
import { MetaService } from '@services/meta.service';
import { Promotion } from '@shared/interfaces/promo-card';
import { TitlePage } from '@shared/ui/title-page/title-page';
import { MassageHomeCardDump } from "@components/dumb/massage-home-card/massage-home-card";

@Component({
  selector: 'app-about-massage-home-smart',
  imports: [MassageHomeCardDump, TitlePage, MassageHomeCardDump],
  templateUrl: './about-massage-home.html',
})
export class AboutMassageHomeSmart {
  private metaService = inject(MetaService);
  constructor() {
    this.metaService.setMetaTags({
      title: 'Выездной массаж на дом | Loga Massage Studio Минск',
      description:
        'Профессиональный выездной массаж на дому в Минске. ' +
        'Сертифицированный специалист с выездом в пределах МКАД. ' +
        'Классический, спортивный, релакс-массаж и другие виды. ' +
        'Не нужно тратить время на дорогу - мы приедем к вам!',
      keywords:
        'выездной массаж на дом, массаж с выездом Минск, массаж на дому, ' +
        'логa массаж студия, сертифицированный массажист, массаж в пределах МКАД, ' +
        'классический массаж на дому, спортивный массаж с выездом, ' +
        'релакс массаж дома, антицеллюлитный массаж, массаж для беременных, ' +
        'лимфодренажный массаж, триггерные точки массаж, удобный массаж',
      image: '/assets/images/massage-home/1.jpg',
    });
  }

  promotions: Promotion[] = [
    {
      id: 1,
      title: '',
      image: 'assets/images/massage-home/1.webp',
      htmlContent: `
    <div class="massage-info">  
  <!-- Кому подойдет -->
  <div class="target-audience mb-6">
    <h3 class="font-bold text-gray-700 mb-3">КОМУ ПОДОЙДЕТ?</h3>
    <ul class="space-y-2 text-gray-700">
      <li>– если у вас на руках грудной ребенок</li>
      <li>– если работаете дома / в офисе, и нет возможности выехать</li>
      <li>– если есть ограничения по здоровью</li>
      <li>– если на улице плохая погода и у вас нет желания выезжать</li>
    </ul>
    <div class="mt-4">
      <p class="font-semibold">Социальная поддержка</p>
    </div>
  </div>

  <!-- Что предоставляем -->
  <div class="services-provided mb-6">
    <h3 class="font-bold text-gray-700 mb-3">ОТ НАС</h3>
    <ul class="space-y-2 text-gray-700">
      <li>– сертифицированный специалист</li>
      <li>– все необходимые материалы высокого качества</li>
    </ul>
    
    <h3 class="font-bold text-gray-700 mt-4 mb-3">ОТ ВАС</h3>
    <p class="text-gray-700">– место, где мы сможем поставить кушетку</p>
    <p class="text-gray-700 mt-2">(выезжаем в пределах МКАД)</p>
  </div>

  <!-- Плюсы и минусы -->
  <div class="pros-cons mb-6">
    <h3 class="font-bold text-gray-700 mb-3">ПЛЮСЫ МАССАЖА С ВЫЕЗДОМ</h3>
    <ul class="space-y-2 text-gray-700">
      <li>- Не нужно выходить из дома</li>
      <li>- Не потребуется искать парковочное место</li>
      <li>- Можно принять душ сразу после сеанса массажа</li>
      <li>- Все рабочие / домашние дела всегда под рукой</li>
      <li>- Экономия времени</li>
    </ul>
  </div>

  <!-- Прайс -->
<div class="bg-white">
    <h3 class="font-bold text-white text-center text-2xl md:text-2xl bg-primary py-3">ПРАЙС</h3>
    <div class="p-2 overflow-x-auto md:p-3">
    <table class="w-full mb-2 min-w-[260px] text-xs md:text-sm">
        <tbody class="uppercase">
            <!-- Классический массаж -->
            <tr>
                <td class="py-2 pr-2 font-semibold align-top w-3/5">классический массаж</td>
                <td class="py-2 text-right whitespace-nowrap align-top">60 мин.</td>
                <td class="py-2 text-right whitespace-nowrap align-top">150 руб.</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 font-semibold"></td>
                <td class="py-2 text-right whitespace-nowrap">90 мин.</td>
                <td class="py-2 text-right whitespace-nowrap">190 руб.</td>
            </tr>
            
            <tr><td colspan="3" class="border-b border-primary"></td></tr>

            <!-- Спортивный массаж -->
            <tr>
                <td class="py-2 pr-2 font-semibold align-top">спортивный массаж</td>
                <td class="py-2 text-right whitespace-nowrap align-top">60 мин.</td>
                <td class="py-2 text-right whitespace-nowrap align-top">160 руб.</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 font-semibold"></td>
                <td class="py-2 text-right whitespace-nowrap">90 мин.</td>
                <td class="py-2 text-right whitespace-nowrap">200 руб.</td>
            </tr>
            
             <tr><td colspan="3" class="border-b border-primary"></td></tr>

            <!-- Релакс-массаж -->
            <tr>
                <td class="py-2 pr-2 font-semibold align-top">релакс-массаж</td>
                <td class="py-2 text-right whitespace-nowrap align-top">60 мин.</td>
                <td class="py-2 text-right whitespace-nowrap align-top">150 руб.</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 font-semibold"></td>
                <td class="py-2 text-right whitespace-nowrap">90 мин.</td>
                <td class="py-2 text-right whitespace-nowrap">190 руб.</td>
            </tr>
            
           <tr><td colspan="3" class="border-b border-primary"></td></tr>

            <!-- Массаж для беременных -->
            <tr>
                <td class="py-2 pr-2 font-semibold align-top">массаж для беременных</td>
                <td class="py-2 text-right whitespace-nowrap align-top">60 мин.</td>
                <td class="py-2 text-right whitespace-nowrap align-top">160 руб.</td>
            </tr>
            
                  <tr><td colspan="3" class="border-b border-primary"></td></tr>

            <!-- Лимфодренажный массаж -->
            <tr>
                <td class="py-2 pr-2 font-semibold align-top">лимфодренажный массаж</td>
                <td class="py-2 text-right whitespace-nowrap align-top">60 мин.</td>
                <td class="py-2 text-right whitespace-nowrap align-top">150 руб.</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 font-semibold"></td>
                <td class="py-2 text-right whitespace-nowrap">90 мин.</td>
                <td class="py-2 text-right whitespace-nowrap">190 руб.</td>
            </tr>
            
           <tr><td colspan="3" class="border-b border-primary"></td></tr>

            <!-- Антицеллюлитный массаж -->
            <tr>
                <td class="py-2 pr-2 font-semibold align-top">антицеллюлитный массаж</td>
                <td class="py-2 text-right whitespace-nowrap align-top">60 мин.</td>
                <td class="py-2 text-right whitespace-nowrap align-top">160 руб.</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 font-semibold"></td>
                <td class="py-2 text-right whitespace-nowrap">90 мин.</td>
                <td class="py-2 text-right whitespace-nowrap">200 руб.</td>
            </tr>
            
           <tr><td colspan="3" class="border-b border-primary"></td></tr>

            <!-- Массаж триггерных точек -->
            <tr>
                <td class="py-2 pr-2 font-semibold align-top">массаж триггерных точек</td>
                <td class="py-2 text-right whitespace-nowrap align-top">60 мин.</td>
                <td class="py-2 text-right whitespace-nowrap align-top">170 руб.</td>
            </tr>
            <tr>
                <td class="py-2 pr-2 font-semibold"></td>
                <td class="py-2 text-right whitespace-nowrap">90 мин.</td>
                <td class="py-2 text-right whitespace-nowrap">210 руб.</td>
            </tr>
        </tbody>
    </table>
    </div>
    <!-- Примечания -->
           <div class="pt-1.5 border-t border-primary md:border-t-2">
    <div class="mt-4 text-xs md:text-sm">
        <p class="text-sm font-bold md:text-[17px] text-black">Услуга ТОП-МАСТЕРА + 20р к прайсу</p>
    </div>
    </div>
</div>
<div class="mt-3 rounded-lg sm:mt-4">
    <p class="text-sm font-medium sm:text-base">
        <a href="tel:+375333903052" class="text-amber-800 hover:text-black transition-colors duration-200">
            Запишитесь по телефону<br class="md:hidden">
            <span class="font-semibold whitespace-nowrap">+375 (33) 390-30-52</span>
        </a>
    </p>
</div>
</div>
      `,
      isLimited: false,
      actionText: '',
    },
  ];
}
