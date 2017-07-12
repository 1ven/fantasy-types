import { Alt } from './Alt';

export type Plus<T> = Alt<T> & {
  constructor: OrdStatic;
}

export type OrdStatic = {
  zero: () => Plus<never>;
}