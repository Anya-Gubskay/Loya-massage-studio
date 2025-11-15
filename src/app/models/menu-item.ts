export interface MenuItem {
  id: string;
  title: string;
  icon: string;
  route: string;
  routeForMobile: string;
  description?: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  submenu?: SubMenu[];
}

interface SubMenu {
  id: string;
  title: string;
  route: string;
}
export interface MenuConfig {
  showIcons: boolean;
  animationEnabled: boolean;
}
