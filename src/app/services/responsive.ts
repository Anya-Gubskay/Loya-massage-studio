// responsive.service.ts
import { Injectable, computed, signal, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ResponsiveService implements OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private resizeListener!: () => void;
  
  windowWidth = signal(0);

  constructor() {
    if (this.isBrowser) {
      this.windowWidth.set(window.innerWidth);
      this.setupResizeListener();
    }
  }

  getResponsiveConfig(baseConfig: any, breakpoints: { maxWidth: number, slidesToShow: number, positionArrowRightLeft?: string }[]) {
    return computed(() => {
      if (!this.isBrowser) return baseConfig;

      const windowWidth = this.windowWidth();
      const matchedBreakpoint = breakpoints.find(bp => windowWidth < bp.maxWidth);
      
      return matchedBreakpoint 
        ? { ...baseConfig, slidesToShow: matchedBreakpoint.slidesToShow, positionArrowRightLeft: matchedBreakpoint.positionArrowRightLeft }
        : baseConfig;
    });
  }

  private setupResizeListener() {
    const handleResize = () => {
      this.windowWidth.set(window.innerWidth);
    };

    let timeout: any;
    this.resizeListener = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleResize();
      }, 100);
    };

    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    if (this.isBrowser && this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }
}