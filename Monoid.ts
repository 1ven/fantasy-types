import { Semigroup } from "./Semigroup";

export interface Monoid extends Semigroup {
  new (): Monoid;
  empty: () => Monoid;
}
