import * as array from "../../built-in/Array";
import { Functor } from "../Functor";

export interface Extend<T> extends Functor<T> {
  extend: <T1>(f: (a: Extend<T>) => T1) => Extend<T1>;
}

export function extend<T, T1>(f: (a: Array<T>) => T1, b: Array<T>): Array<T1>;
export function extend<T, T1>(
  f: (a: Extend<T>) => T1,
  b: Extend<T>
): Extend<T1>;

export function extend(f, b) {
  const apply = obj => obj.extended.prototype.extend.apply(b, [f]);

  if (array.is(b)) {
    return apply(array);
  }

  return b.extend(f);
}
