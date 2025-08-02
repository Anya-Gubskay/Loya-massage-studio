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
      title: 'О нашем салоне Loya Massage Studio',
      description: 'Loya Massage Studio - это профессиональный массажный салон в центре Минска c 2024 года.',
      keywords: 'массажный салон, о нас, история, специалисты',
      image: '/assets/images/main-desktop.jpg',
      imageWidth: '1200',
      imageHeight: '630'
    });
  }
}
