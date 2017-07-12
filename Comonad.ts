import { Extend } from './Extend';

export type Comonad<T> = Extend<T> & {
  extract: () => T;
}