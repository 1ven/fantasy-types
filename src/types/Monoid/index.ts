import * as array from "../../built-in/Array";
import { Semigroup } from "../Semigroup";

export interface Monoid extends Semigroup {}

export interface MonoidConstructor {
  // new (): Monoid;
  empty: () => Monoid;
}

export const empty = function(M: MonoidConstructor) {
  if (array.isConstructor(M)) {
    return array.extended.empty.apply(M);
  }

  return M.empty();
};
