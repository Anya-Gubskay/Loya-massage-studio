import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TitlePage } from "@shared/ui/title-page/title-page";

interface GalleryImage {
  src: string;
  srcGallery?: string;
  alt: string;
}

@Component({
  selector: 'app-about-gallery-smart',
  imports: [CommonModule, TitlePage],
  templateUrl: './about-gallery.html',
  styleUrl: './about-gallery.scss'
})
export class AboutGallerySmart {
 allImages: GalleryImage[] = [
  { 
    src: 'assets/images/about-studio/1.webp', 
    srcGallery: 'assets/images/studio/1.webp', 
    alt: 'Студия-1', 
  },
  { 
    src: 'assets/images/about-studio/3.webp', 
    srcGallery: 'assets/images/studio/3.webp', 
    alt: 'Студия-2', 
  },
  { 
    src: 'assets/images/about-studio/2.webp', 
    srcGallery: 'assets/images/studio/2.webp', 
    alt: 'Студия-3', 
    
  },
  { 
    src: 'assets/images/about-studio/1-night.webp', 
    srcGallery: 'assets/images/studio/1-night.webp', 
    alt: 'Студия-4', 
  },
  { 
    src: 'assets/images/about-studio/2-night.webp', 
    srcGallery: 'assets/images/studio/2-night.webp', 
    alt: 'Студия-5', 
  },
  { 
    src: 'assets/images/about-studio/3-night.webp', 
    srcGallery: 'assets/images/studio/3-night.webp', 
    alt: 'Студия-6', 

  }
];

lightboxActive = false;
currentImageIndex = 0;

openLightbox(index: number) {
  console.log('open');
  this.currentImageIndex = index;
  this.lightboxActive = true;
  // Блокируем скролл страницы при открытой галерее
  document.body.style.overflow = 'hidden';
}

closeLightbox() {
  this.lightboxActive = false;
  // Восстанавливаем скролл страницы
  document.body.style.overflow = '';
}

nextImage() {
  this.currentImageIndex = (this.currentImageIndex + 1) % this.allImages.length;
}

prevImage() {
  this.currentImageIndex = (this.currentImageIndex - 1 + this.allImages.length) % this.allImages.length;
}
closeLightboxOnBackdropClick(event: MouseEvent) {
  // Проверяем, что кликнули именно на фон (а не на дочерние элементы)
  if (event.target === event.currentTarget) {
    this.closeLightbox();
  }
}

// Для закрытия по ESC
@HostListener('document:keydown', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) {
  if (this.lightboxActive) {
    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    }
  }
}
}
