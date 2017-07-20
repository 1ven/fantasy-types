import * as array from "../../built-in/Array";
import * as boolean from "../../built-in/Boolean";
import * as date from "../../built-in/Boolean";
import { Setoid } from "../Setoid";

export interface Ord extends Setoid {
  lte: (a: Ord) => boolean;
}

export const lte = function<T extends Ord>(a: typeof b, b: T) {
  if (array.is(b)) {
    return array.extended.prototype.lte.apply(b, [a]);
  }

  if (boolean.is(b)) {
    return boolean.extended.prototype.lte.apply(b, [a]);
  }

  if (date.is(b)) {
    return date.extended.prototype.lte.apply(b, [a]);
  }

  return b.lte(a);
};
