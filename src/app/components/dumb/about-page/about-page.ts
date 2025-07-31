import { Component, inject, input } from '@angular/core';
import { MetaService } from '@services/meta.service';
import { AboutSmart } from '@components/smart/about/about';


@Component({
  selector: 'app-about-page-dumb',
  imports: [AboutSmart],
  templateUrl: './about-page.html',
})
export class AboutPageDumb {
  private metaService = inject(MetaService)
  constructor() {
    this.metaService.setMetaTags({
      title: 'О нашем массажном салоне | Loya Massage Studio Минск',
      description: 'Loya Massage Studio — место профессионального массажа, где мягкие руки мастеров и тёплая атмосфера ' + 
                  'создают идеальные условия для релаксации. Сертифицированные специалисты и индивидуальный подход.',
      keywords: 'массажный салон Минск, о Loya Massage, атмосфера салона, сертифицированные массажисты, ' +
               'релаксационный массаж, профессиональный массаж, описание салона, наши преимущества',
      image: '/assets/images/studio/1.webp',
    });
  }
}
