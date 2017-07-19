import { Semigroup } from "../Semigroup";

export interface Monoid extends Semigroup {}

export interface MonoidConstructor {
  // new (): Monoid;
  empty: () => Monoid;
}
