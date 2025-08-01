import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '@shared/directives/scroll-animation.directive';
import { CardImage } from '@shared/interfaces/card-image';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-services-gallery-dumb',
  templateUrl: './services.html',
  styleUrl: './services.scss',
  imports: [Button, ScrollAnimationDirective, RouterModule]
})
export class ServicesGalleryComponent {
 data = input<CardImage[]>([])
}