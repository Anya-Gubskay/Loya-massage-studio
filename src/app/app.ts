import { Component, inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { BtnSignUpDumb } from "@components/dumb/btn-sign-up/btn-sign-up";
import { FooterSmart } from '@components/dumb/footer/footer';
import { HeaderSmart } from '@components/smart/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderSmart, FooterSmart, BtnSignUpDumb],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }

  private scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Основной способ (лучшая поддержка)
      window.scrollTo(0, 0);
      
      // Дублирование для подстраховки
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }


}
