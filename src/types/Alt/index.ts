import * as array from "../../built-in/Array";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";
import { curry } from "../../methods";

import { Functor } from "../Functor";

export interface Alt<T> extends Functor<T> {
  alt: <T1>(a: Alt<T1>) => Alt<T | T1>;
}

export type AltFunction = {
  /**
   * PlainObject
   */
  <T, T1>(a: PlainObject<T>, b: PlainObject<T1>): PlainObject<T | T1>;
  <T, T1>(a: PlainObject<T>): (b: PlainObject<T1>) => PlainObject<T | T1>;
  /**
   * Array
   */
  <T, T1>(a: Array<T>, b: Array<T1>): Array<T | T1>;
  <T, T1>(a: Array<T>): (b: Array<T1>) => Array<T | T1>;
  /**
   * Alt
   */
  <T extends Alt<T1>, T1>(a: T, b: typeof a): Alt<T1>;
  <T extends Alt<T1>, T1>(a: T): (b: typeof a) => Alt<T1>;
};

export const alt: AltFunction = curry((a, b) => {
  const apply = obj => obj.methods.alt(a, b);

  if (object.is(b)) {
    return apply(object);
  }

  if (array.is(b)) {
    return apply(array);
  }

  return b.alt(a);
});
