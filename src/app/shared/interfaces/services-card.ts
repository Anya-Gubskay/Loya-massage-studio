export interface ServicesCard {
  title: string;
  preload: string;
  videoUrl: string;
  videoWebMUr?: string;
  posterImage: string;
  serviceGroups: ServiceGroup[];
  note: string;
  disclaimer: string;
}

export interface ServiceGroup {
  name: string;
  services: MassageService[];
  isAuthor?: boolean;
}

export interface MassageService {
  duration: string;
  price: string;
}

