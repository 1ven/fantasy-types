import { Alt } from './Alt';

export type Plus<T> = Alt<T> & {
  constructor: {
    zero: () => Plus<never>;
  }
}