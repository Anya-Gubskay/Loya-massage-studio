import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private defaultDescription = 'Loya Massage Studio - профессиональный массажный салон в Минске';
  private readonly baseUrl = 'https://loya-massage-studio.vercel.app/';

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  setMetaTags(config: {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
    imageWidth?: string,
    imageHeight?: string,
    ogImage?: string;
    url?: string;
    canonicalUrl?: string;
  }) {
    // Устанавливаем title
    this.title.setTitle(`${config.title} | Loya Massage Studio`);

    // Description
    const description = config.description || this.defaultDescription;
    this.updateTag('name', 'description', description);
    
    // Keywords
    if (config.keywords) {
      this.updateTag('name', 'keywords', config.keywords);
    }

    // URL
    const url = config.url || this.getCurrentUrl();

    // OpenGraph
    this.updateTag('property', 'og:title', config.title);
    this.updateTag('property', 'og:description', description);
    this.updateTag('property', 'og:type', 'website');
    this.updateTag('property', 'og:url', url);
    
    // Image
    if (config.image) {
      const fullImageUrl = this.getAbsoluteUrl(config.image);
      this.updateTag('property', 'og:image', fullImageUrl);
      this.updateTag('name', 'twitter:image', fullImageUrl);
      this.updateTag('name', 'twitter:image', fullImageUrl);
    }

    if (config.imageWidth && config.imageHeight) {
      this.updateTag('property', 'og:image:width', config.imageWidth);
      this.updateTag('property', 'og:image:height', config.imageHeight);
    }
    
    // Twitter Card
    this.updateTag('name', 'twitter:card', 'summary_large_image');
    this.updateTag('name', 'twitter:title', config.title);
    this.updateTag('name', 'twitter:description', description);

    // Каноническая ссылка
    const canonicalUrl = config.canonicalUrl || url;
    this.updateCanonicalUrl(canonicalUrl);
  }

  private updateTag(attr: 'name' | 'property', selector: string, content: string) {
    // Удаляем существующий тег
    const existingTag = this.meta.getTag(`${attr}="${selector}"`);
    if (existingTag) {
      this.meta.removeTagElement(existingTag);
    }
    
    // Добавляем новый тег
    this.meta.addTag({ [attr]: selector, content });
  }

  private updateCanonicalUrl(url: string) {
    // Удаляем существующую каноническую ссылку
    const existingLink = this.meta.getTag('rel="canonical"');
    if (existingLink) {
      this.meta.removeTagElement(existingLink);
    }
    
    // Добавляем новую ссылку
    this.meta.addTag({ rel: 'canonical', href: url });
  }

  private getCurrentUrl(): string {
    if (isPlatformBrowser(this.platformId)) {
      return window.location.href;
    }
    return this.baseUrl;
  }

  getBaseUrl(): string {
    if (isPlatformBrowser(this.platformId)) {
      return window.location.origin;
    } 
    return this.baseUrl;
  }

  private getAbsoluteUrl(relativeUrl: string): string {
    if (relativeUrl.startsWith('http')) return relativeUrl;
    return `${this.getBaseUrl()}${relativeUrl}`;
  }
}