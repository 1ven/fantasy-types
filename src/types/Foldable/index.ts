import * as array from "../../built-in/Array";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";
import { curry } from "../../methods";

export interface Foldable<T> {
  reduce: <T1>(fn: (acc: T1, value: T) => T1, i: T1) => T1;
}

export type ReducePartial1 = {
  <T, T1>(a: PlainObject<T>): T1;
  <T, T1>(a: Array<T>): T1;
  <T, T1>(a: Foldable<T>): T1;
};

export type ReducePartial2 = {
  <T, T1>(i: T1, a: PlainObject<T>): T1;
  <T, T1>(i: T1, a: Array<T>): T1;
  <T, T1>(i: T1, a: Foldable<T>): T1;
};

export type ReduceFunction = {
  /**
   * PlainObject
   */
  <T, T1>(f: (acc: T1, val: T) => T1, i: T1, a: PlainObject<T>): T1;
  /**
   * Array
   */
  <T, T1>(f: (acc: T1, val: T) => T1, i: T1, a: Array<T>): T1;
  /**
   * Foldable
   */
  <T, T1>(f: (acc: T1, val: T) => T1, i: T1, a: Foldable<T>): T1;
  /**
   * Partial application
   */
  <T, T1>(f: (acc: T1, val: T) => T1): ReducePartial2;
  <T, T1>(f: (acc: T1, val: T) => T1, i: T1): ReducePartial1;
  <T, T1>(f: (acc: T1, val: T) => T1): (i: T1) => ReducePartial1;
};

export const reduce: ReduceFunction = curry((f, i, a) => {
  const apply = obj => obj.methods.reduce(f, i, a);

  if (object.is(a)) {
    return apply(object);
  }

  if (array.is(a)) {
    return apply(array);
  }

  return a.reduce(f, i);
});
