import { Component, Input } from "@angular/core";
import { Card } from "@shared/ui/card/card";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Promotion } from "@shared/interfaces/promo-card";

@Component({
  selector: 'app-massage-home-card-dumb',
  imports: [Card],
  templateUrl: './massage-home-card.html',
})
export class MassageHomeCardDump {
  @Input() promotion!: Promotion;

  constructor(private sanitizer: DomSanitizer) {}

  get safeHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.promotion.htmlContent);
  }
}