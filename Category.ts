import { Semigroupoid } from './Semigroupoid';

export type Category = Semigroupoid & {
  constructor: {
    id: <T>() => T;
  }
}