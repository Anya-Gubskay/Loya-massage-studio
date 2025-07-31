  export interface MenuItem {
    id: string;
    title: string;
    icon: string;
    route: string;
    routeForMobile: string;
    description?: string;
    isActive?: boolean;
  }
  export interface MenuConfig {
    showIcons: boolean;
    animationEnabled: boolean;
  }