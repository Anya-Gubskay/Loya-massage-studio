import { HeaderState } from './header/header.reducer';

export interface AppState {
  header: HeaderState;
  // Другие feature-состояния добавляйте здесь
  // auth: AuthState;
  // user: UserState;
}