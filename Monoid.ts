import { Semigroup } from './Semigroup';

export type Monoid = Semigroup & {
  constructor: MonoidConstructor;
}

export type MonoidConstructor = {
  empty: () => Monoid;
}