import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  private router = inject(Router)
  @Input() variant: ButtonVariant = 'primary';
  @Input() text: string = '';
  @Input() icon?: string;
  @Input() disabled: boolean = false;

    // Добавляем поддержку routerLink (для Angular Router)
    @Input() routerLink?: string | any[];
  
    // Добавляем поддержку href (для обычных ссылок)
    @Input() href?: string;
    
    // Добавляем target (если ссылка должна открываться в новой вкладке)
    @Input() target?: '_blank' | '_self' | '_parent' | '_top' = '_blank';

    openLink() {
      if (!this.disabled && this.href) {
        window.open(this.href, this.target || '_blank', 'noopener,noreferrer');
      }
    }
    

    // Обработка клика, если используется routerLink
    handleClick() {
      if (this.routerLink && !this.disabled) {
        if (Array.isArray(this.routerLink)) {
          this.router.navigate(this.routerLink);
        } else {
          this.router.navigateByUrl(this.routerLink);
        }
      }
    }
}
