import { Component, inject } from '@angular/core';
import { MetaService } from '@services/meta.service';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-main-dumb',
  imports: [Button],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class MainDumb {
  private metaService = inject(MetaService)
  constructor() {
    this.metaService.setMetaTags({
      title: 'Массажный салон Loya в Минске — скидка 20 BYN на первый визит!',
      description: 'Профессиональный массаж в центре Минска: спортивный, релакс, антицеллюлитный. Онлайн-запись, сертифицированные мастера. Скидка 20 BYN новым клиентам!',
      keywords: 'массажный салон Минск, спортивный массаж, массаж недорого, запись на массаж онлайн, массажисты минск, антицеллюлитный массаж, расслабляющий массаж, скидки на массаж',
      image: '/assets/images/meta.JPG',
      imageWidth: '1200',
      imageHeight: '630'
    });
  }
}
