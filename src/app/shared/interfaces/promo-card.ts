export interface Promotion {
    id: number;
    title: string;
    image: string;
    htmlContent: string;
    isLimited?: boolean;
    actionText?: string;
  }