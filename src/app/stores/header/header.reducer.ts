import { createReducer, on } from '@ngrx/store';
import { MenuItem } from '@models/menu-item';
import * as HeaderActions from './header.actions';

export interface HeaderState {
  menuItems: MenuItem[];
  loading: boolean;
  error: string | null;
}

export const initialState: HeaderState = {
  menuItems: [],
  loading: false,
  error: null
};

export const headerReducer = createReducer(
  initialState,
  on(HeaderActions.loadMenu, (state) => ({
    ...state,
    loading: true
  })),
  on(HeaderActions.loadMenuSuccess, (state, { menuItems }) => ({
    ...state,
    menuItems,
    loading: false
  })),
  on(HeaderActions.loadMenuFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);