import * as array from "../../built-in/Array";
import { Functor } from "../Functor";
import { curry } from "../../methods";

export interface Extend<T> extends Functor<T> {
  extend: <T1>(f: (a: Extend<T>) => T1) => Extend<T1>;
}

export type ExtendFunction = {
  /**
   * Array
   */
  <T, T1>(f: (a: Array<T>) => T1, b: Array<T>): Array<T1>;
  <T, T1>(f: (a: Array<T>) => T1): (b: Array<T>) => Array<T1>;
  /**
   * Extend
   */
  <T, T1>(f: (a: Extend<T>) => T1, b: Extend<T>): Extend<T1>;
  <T, T1>(f: (a: Extend<T>) => T1): (b: Extend<T>) => Extend<T1>;
};

export const extend: ExtendFunction = curry((f, b) => {
  const apply = obj => obj.methods.extend(f, b);

  if (array.is(b)) {
    return apply(array);
  }

  return b.extend(f);
});
