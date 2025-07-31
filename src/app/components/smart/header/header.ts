import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeaderDumb } from '../../dumb/header/header';
import { AppState } from '@stores/app-state';
import { toSignal } from '@angular/core/rxjs-interop';
import * as HeaderActions from '@stores/header/header.actions';
import { selectMenuItems } from '@stores/header/header.selectors';

@Component({
  selector: 'app-header-smart',
  imports: [HeaderDumb],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderSmart {
  private store = inject(Store<AppState>);
  
  menuItems = toSignal(
    this.store.select(selectMenuItems),
    { initialValue: [] }
  );

  constructor() {
    this.store.dispatch(HeaderActions.loadMenu());
  }
}
