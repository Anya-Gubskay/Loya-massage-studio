import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {  ServicesCard } from '@shared/interfaces/services-card';
import { Button } from '@shared/ui/button/button';
import { Card } from '@shared/ui/card/card';

@Component({
  selector: 'app-card-service-dumb',
  imports: [CommonModule, Button, Card],
  templateUrl: './card-services.html',
  styleUrl: './card-services.scss'
})
export class CardServicesDumb {
  @Input()cardData!: ServicesCard;
  @ViewChild('videoElement') videoRef!: ElementRef<HTMLVideoElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    this.forceVideoReload();
  }

  forceVideoReload() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.cardData?.videoUrl) return;

    try {
      const video = this.videoRef?.nativeElement;
      if (video && typeof video.load === 'function') {
        video.load();
      }
    } catch (e) {
      console.error('Video load error:', e);
    }
  }

  getSafeVimeoUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1&loop=1&muted=1`
    );
  }

}
