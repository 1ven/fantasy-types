import * as array from "../../built-in/Array";
import * as boolean from "../../built-in/Boolean";
import * as date from "../../built-in/Boolean";
import * as number from "../../built-in/Number";
import * as string from "../../built-in/String";
import { Setoid } from "../Setoid";

export interface Ord extends Setoid {
  lte: (a: Ord) => boolean;
}

export const lte = function<T extends Ord>(a: typeof b, b: T) {
  const apply = obj => obj.extended.prototype.lte.apply(b, [a]);

  if (array.is(b)) {
    return apply(array);
  }

  if (boolean.is(b)) {
    return apply(boolean);
  }

  if (date.is(b)) {
    return apply(date);
  }

  if (number.is(b)) {
    return apply(number);
  }

  if (string.is(b)) {
    return apply(string);
  }

  return b.lte(a);
};
