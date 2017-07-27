import * as object from "../../built-in/Object";
import * as array from "../../built-in/Array";
import * as func from "../../built-in/Function";
import { PlainObject } from "../../built-in/Object";

export interface Functor<T> {
  map: <T1>(fn: (a: T) => T1) => Functor<T1>;
}

export function map<T, T1>(f: (x: T) => T1, a: PlainObject<T>): PlainObject<T1>;
export function map<T, T1>(f: (x: T) => T1, a: Array<T>): Array<T1>;
export function map<T, T1>(f: (x: T) => T1, a: Function): Function;
export function map<T, T1>(f: (x: T) => T1, a: Functor<T>): Functor<T1>;

export function map(f, a) {
  const apply = obj => obj.extended.prototype.map.apply(a, [f]);
  const apply1 = obj => obj.methods.map(f, a);

  if (object.is(a)) {
    return apply1(object);
  }

  if (array.is(a)) {
    return apply1(array);
  }

  if (func.is(a)) {
    return apply1(func);
  }

  return a.map(f);
}
