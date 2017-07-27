import * as array from "../../built-in/Array";
import * as func from "../../built-in/Function";
import * as boolean from "../../built-in/Boolean";
import * as date from "../../built-in/Date";
import * as error from "../../built-in/Error";
import * as number from "../../built-in/Number";
import * as regexp from "../../built-in/RegExp";
import * as string from "../../built-in/String";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";

export interface Setoid {
  equals: <T extends Setoid>(this: typeof a, a: T) => boolean;
}

export function equals<T, T1>(a: PlainObject<T>, b: PlainObject<T1>): boolean;
export function equals<T>(a: typeof b, b: Array<T>): boolean;
export function equals(a: typeof b, b: Function): boolean;
export function equals(a: typeof b, b: Boolean): boolean;
export function equals(a: typeof b, b: Date): boolean;
export function equals(a: typeof b, b: Error): boolean;
export function equals(a: typeof b, b: Number): boolean;
export function equals(a: typeof b, b: RegExp): boolean;
export function equals(a: typeof b, b: String): boolean;
export function equals<T extends Setoid>(a: typeof b, b: T): boolean;

export function equals(a, b) {
  const apply = obj => obj.extended.prototype.equals.apply(b, [a]) as boolean;
  const apply1 = obj => obj.methods.equals(a, b);

  if (object.is(b)) {
    return apply(object);
  }

  if (array.is(b)) {
    return apply1(array);
  }

  if (func.is(b)) {
    return apply(func);
  }

  if (boolean.is(b)) {
    return apply(boolean);
  }

  if (date.is(b)) {
    return apply(date);
  }

  if (error.is(b)) {
    return apply(error);
  }

  if (number.is(b)) {
    return apply(number);
  }

  if (regexp.is(b)) {
    return apply(regexp);
  }

  if (string.is(b)) {
    return apply(string);
  }

  return b.equals(a);
}
