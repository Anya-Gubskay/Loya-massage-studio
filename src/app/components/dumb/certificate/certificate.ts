import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '@shared/directives/scroll-animation.directive';
import { Button } from '@shared/ui/button/button';
import { Card } from '@shared/ui/card/card';
import { TitlePage } from "@shared/ui/title-page/title-page";


@Component({
  selector: 'app-certificate-dumb',
  imports: [Button, Card, ScrollAnimationDirective, TitlePage],
  templateUrl: './certificate.html',
  styleUrl: './certificate.scss'
})
export class Certificate {

}
