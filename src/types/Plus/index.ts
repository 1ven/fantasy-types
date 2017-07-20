import * as array from "../../built-in/Array";
import { Alt } from "../Alt";

export interface Plus<T> extends Alt<T> {}

export interface PlusConstructor {
  // new (): Plus<void>;
  zero: () => Plus<void>;
}

export const zero = function(P: PlusConstructor) {
  const apply = obj => obj.extended.zero.apply(P);

  if (array.isConstructor(P)) {
    return apply(array);
  }

  return P.zero();
};
