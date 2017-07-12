import { Alt } from './Alt';

export type Plus<T> = Alt<T> & {
  constructor: OrdConstructor;
}

export type OrdConstructor = {
  zero: () => Plus<never>;
}