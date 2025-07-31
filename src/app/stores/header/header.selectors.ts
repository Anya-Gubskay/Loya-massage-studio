import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeaderState } from './header.reducer';

export const selectHeaderState = createFeatureSelector<HeaderState>('header');

export const selectMenuItems = createSelector(
  selectHeaderState,
  (state) => state.menuItems
);

export const selectMenuLoading = createSelector(
  selectHeaderState,
  (state) => state.loading
);