import * as array from "../../built-in/Array";

export interface Functor<T> {
  map: <T1>(fn: (a: T) => T1) => Functor<T1>;
}

export const map = function<T, T1>(f: (x: T) => T1, a: Functor<T>) {
  if (array.is(a)) {
    return array.extended.prototype.map.apply(a, [f]);
  }

  return a.map(f);
};