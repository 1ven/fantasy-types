import { Semigroup } from './Semigroup';

export type Monoid = Semigroup & {
  constructor: MonoidStatic;
}

export type MonoidStatic = {
  empty: () => Monoid;
}