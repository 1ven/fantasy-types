import * as array from "../../built-in/Array";
import { Functor } from "../Functor";

export interface Extend<T> extends Functor<T> {
  extend: <T1>(f: (a: Extend<T>) => T1) => Extend<T1>;
}

export const extend = function<T, T1>(f: (a: Extend<T>) => T1, b: Extend<T>) {
  const apply = obj => obj.extended.prototype.extend.apply(b, [f]);

  if (array.is(b)) {
    return apply(array);
  }

  return b.extend(f);
};
