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

    @Input() routerLink?: string | any[];
  
    @Input() href?: string;
    
    @Input() target?: '_blank' | '_self' | '_parent' | '_top' = '_blank';

    openLink() {
      if (!this.disabled && this.href) {
        window.open(this.href, this.target || '_blank', 'noopener,noreferrer');
      }
    }
    
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
