import { Semigroup } from './Semigroup';

export type Monoid = Semigroup & {
  constructor: {
    empty: () => Monoid;
  }
}