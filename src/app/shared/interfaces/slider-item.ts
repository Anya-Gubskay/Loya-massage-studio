import { TemplateRef } from "@angular/core";

export interface CarouselItem {
    [key: string]: any;
    photo?: string;
    name?: string;
    role?: string;
    template?: TemplateRef<any>;
    alt: string;
  }

  export interface CarouselSlide {
    id: number;
    content: any; 
  }
  

  export interface CarouselConfig {
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    dots?: boolean;
    arrows?: boolean;
    infinite?: boolean;
    positionArrow?: string;
    positionArrowRightLeft?: string;
  }

  
  