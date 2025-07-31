import { createAction, props } from '@ngrx/store';
import { MenuItem } from '@models/menu-item';

export const loadMenu = createAction('[Header] Load Menu');
export const loadMenuSuccess = createAction(
  '[Header] Load Menu Success',
  props<{ menuItems: MenuItem[] }>()
);
export const loadMenuFailure = createAction(
  '[Header] Load Menu Failure',
  props<{ error: string }>()
);