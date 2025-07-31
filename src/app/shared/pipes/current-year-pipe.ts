import { isPlatformBrowser } from '@angular/common';
import { Inject, Pipe, PipeTransform, PLATFORM_ID } from '@angular/core';

@Pipe({
  name: 'currentYear'
})
export class CurrentYearPipe implements PipeTransform {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  transform(v: string): number {
    // Если выполняется в браузере — берем текущий год, иначе (на сервере) — фиксированный
    return isPlatformBrowser(this.platformId) 
      ? new Date().getFullYear() 
      : this.getServerSideYear();
  }

  private getServerSideYear(): number {
    // Варианты fallback для SSR:
    // 1. Берем год из системного времени сервера (если доступно)
    // 2. Используем хардкод (нежелательно)
    return new Date().getFullYear(); // или return 2025;
  }
}
