import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ScrollAnimationDirective } from '@shared/directives/scroll-animation.directive';
import { TitlePage } from "@shared/ui/title-page/title-page";

@Component({
  selector: 'app-contacts-dumb',
  imports: [ScrollAnimationDirective, TitlePage, CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {
  backgroundClass = input<string>("bg-[rgb(226_216_207)]");
  mapLoaded = false;

}
