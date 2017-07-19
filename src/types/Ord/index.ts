import * as array from "../../built-in/Array";
import { Setoid } from "../Setoid";

export interface Ord extends Setoid {
  lte: (a: Ord) => boolean;
}

export const lte = function<T extends Ord>(a: typeof b, b: T) {
  if (array.is(b)) {
    return array.extended.prototype.lte.apply(b, [a]);
  }

  return b.lte(a);
};
