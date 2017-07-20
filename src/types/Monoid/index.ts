import * as array from "../../built-in/Array";
import { Semigroup } from "../Semigroup";

export interface Monoid extends Semigroup {}

export interface MonoidConstructor {
  // new (): Monoid;
  empty: () => Monoid;
}

export const empty = function(M: MonoidConstructor) {
  const apply = obj => obj.extended.empty.apply(M);

  if (array.isConstructor(M)) {
    return apply(array);
  }

  return M.empty();
};
