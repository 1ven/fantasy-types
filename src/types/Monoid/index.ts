import * as array from "../../built-in/Array";
import * as string from "../../built-in/String";
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

  if (string.isConstructor(M)) {
    return apply(string);
  }

  return M.empty();
};
