import * as array from "../../built-in/Array";

export interface Foldable<T> {
  reduce: <T1>(fn: (acc: T1, value: T) => T1, initial: T1) => T1;
}

export const reduce = function<T, T1>(
  f: (acc: T1, val: T) => T1,
  initial: T1,
  a: Foldable<T>
) {
  if (array.is(a)) {
    return array.extended.prototype.reduce.apply(a, [f, initial]);
  }

  return a.reduce(f, initial);
};
