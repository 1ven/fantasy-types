import * as array from "../../built-in/Array";
import * as boolean from "../../built-in/Boolean";
import * as date from "../../built-in/Boolean";
import * as number from "../../built-in/Number";
import * as string from "../../built-in/String";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";
import { Setoid } from "../Setoid";

export interface Ord extends Setoid {
  lte: (a: Ord) => boolean;
}

export function lte<T>(a: typeof b, b: PlainObject<T>): boolean;
export function lte<T>(a: typeof b, b: Array<T>): boolean;
export function lte(a: typeof b, b: Boolean): boolean;
export function lte(a: typeof b, b: Date): boolean;
export function lte(a: typeof b, b: Number): boolean;
export function lte(a: typeof b, b: String): boolean;
export function lte<T extends Ord>(a: typeof b, b: T): boolean;

export function lte(a, b) {
  const apply = obj => obj.extended.prototype.lte.apply(b, [a]);

  if (object.is(b)) {
    return apply(object);
  }

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
}
