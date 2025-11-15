import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Promotion } from '@shared/interfaces/promo-card';
import { Card } from "@shared/ui/card/card";

@Component({
  selector: 'app-promo-card-dumb',
  imports: [Card],
  templateUrl: './promo-card.html',
})
export class PromoCardDumb {
  @Input() promotion!: Promotion;

  constructor(private sanitizer: DomSanitizer) {}

  get safeHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.promotion.htmlContent);
  }
}
