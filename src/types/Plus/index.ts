import * as array from "../../built-in/Array";
import { Alt } from "../Alt";

export interface Plus<T> extends Alt<T> {}

export interface PlusConstructor {
  // new (): Plus<void>;
  zero: () => Plus<void>;
}

export const zero = function(P: PlusConstructor) {
  if (array.isConstructor(P)) {
    return array.extended.zero.apply(P);
  }

  return P.zero();
};
