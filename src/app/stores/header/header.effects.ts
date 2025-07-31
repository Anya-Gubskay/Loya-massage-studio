import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MenuService } from '@services/menu'
import * as HeaderActions from './header.actions';

@Injectable()
export class HeaderEffects {
  private actions$ = inject(Actions);
  private menuService = inject(MenuService);

  loadMenu$ = createEffect(() => 
    this.actions$.pipe(
      ofType(HeaderActions.loadMenu),
      switchMap(() =>
        this.menuService.getMenuItems().pipe(
          map(menuItems => HeaderActions.loadMenuSuccess({ menuItems })),
          catchError(error => of(HeaderActions.loadMenuFailure({ error })))
        )
      )
    )
  );
}