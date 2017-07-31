import * as object from "../../built-in/Object";
import * as array from "../../built-in/Array";
import * as func from "../../built-in/Function";
import { PlainObject } from "../../built-in/Object";
import { curry } from "../../methods";

export interface Functor<T> {
  map: <T1>(fn: (a: T) => T1) => Functor<T1>;
}

export interface MapFunction {
  /**
   * PlainObject
   */
  <T, T1>(f: (x: T) => T1, a: PlainObject<T>): PlainObject<T1>;
  /**
   * Array
   */
  <T, T1>(f: (x: T) => T1, a: Array<T>): Array<T1>;
  /**
   * Function
   */
  <T, T1>(f: (x: T) => T1, a: (...args) => T): (...args) => T1;
  /**
   * Functor
   */
  <T, T1>(f: (x: T) => T1, a: Functor<T>): Functor<T1>;
  /**
   * Partial application
   */
  <T, T1>(f: (x: T) => T1): {
    (a: PlainObject<T>): PlainObject<T1>;
    (a: Array<T>): Array<T1>;
    (a: (...args) => T): (...args) => T1;
    (a: Functor<T>): Functor<T1>;
  };
}

export const map: MapFunction = curry(function(f, a) {
  const apply = obj => obj.methods.map(f, a);

  if (object.is(a)) {
    return apply(object);
  }

  if (array.is(a)) {
    return apply(array);
  }

  if (func.is(a)) {
    return apply(func);
  }

  return a.map(f);
});
