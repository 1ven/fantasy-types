import * as array from "../../built-in/Array";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";

export interface Foldable<T> {
  reduce: <T1>(fn: (acc: T1, value: T) => T1, initial: T1) => T1;
}

export function reduce<T, T1>(
  f: (acc: T1, val: T) => T1,
  initial: T1,
  a: PlainObject<T>
): T1;
export function reduce<T, T1>(
  f: (acc: T1, val: T) => T1,
  initial: T1,
  a: Array<T>
): T1;
export function reduce<T, T1>(
  f: (acc: T1, val: T) => T1,
  initial: T1,
  a: Foldable<T>
): T1;

export function reduce(f, initial, a) {
  const apply = obj => obj.extended.prototype.reduce.apply(a, [f, initial]);
  const apply1 = obj => obj.methods.reduce(f, initial, a);

  if (object.is(a)) {
    return apply(object);
  }

  if (array.is(a)) {
    return apply1(array);
  }

  return a.reduce(f, initial);
}
