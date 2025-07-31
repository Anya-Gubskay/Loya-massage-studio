import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-sign-up-dumb',
  imports: [],
  templateUrl: './btn-sign-up.html',
  styleUrl: './btn-sign-up.scss'
})
export class BtnSignUpDumb {
  openLink() {
    window.open('https://dikidi.net/601523?p=0.pi', '_blank', 'noopener,noreferrer');
}
}
