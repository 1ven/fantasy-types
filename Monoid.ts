import { Semigroup } from "./Semigroup";

export interface Monoid extends Semigroup {}

export interface MonoidConstructor {
  empty: () => Monoid;
}
