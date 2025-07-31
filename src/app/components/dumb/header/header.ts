import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '@models/menu-item';

@Component({
  selector: 'app-header-dumb',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderDumb {
  menuItems = input.required<MenuItem[]>();
  isMobileMenuOpen = false;
}
  