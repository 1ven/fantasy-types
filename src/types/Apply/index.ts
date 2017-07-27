import * as object from "../../built-in/Object";
import * as array from "../../built-in/Array";
import * as func from "../../built-in/Function";
import { PlainObject } from "../../built-in/Object";
import { Functor } from "../Functor";

export interface Apply<T> extends Functor<T> {
  ap: <T1>(a: Apply<(b: T) => T1>) => Apply<T1>;
}

export function ap<T, T1>(
  a: PlainObject<(x: T) => T1>,
  b: PlainObject<T>
): PlainObject<T1>;
export function ap<T, T1>(a: Array<(x: T) => T1>, b: Array<T>): Array<T1>;
export function ap<T, T1, T2>(
  a: Function,
  f: (x: T) => (y: T1) => T2
): Function;
export function ap<T, T1>(a: Apply<(x: T) => T1>, b: Apply<T>): Apply<T1>;

export function ap<T, T1>(a, b) {
  const apply = obj => obj.extended.prototype.ap.apply(b, [a]);
  const apply1 = obj => obj.methods.ap(a, b);

  if (object.is(b)) {
    return apply1(object);
  }

  if (array.is(b)) {
    return apply1(array);
  }

  if (func.is(b)) {
    return apply1(func);
  }

  return b.ap(a);
}
