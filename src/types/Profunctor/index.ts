import * as func from "../../built-in/Function";
import { Functor } from "../Functor";

export interface Profunctor<T> extends Functor<T> {
  promap: <T1, T2>(f: (a: T) => T1, g: (a: T1) => T2) => Profunctor<T2>;
}

export function promap<T, T1, T2>(
  f: (x: T) => T1,
  g: (a: T1) => T2,
  a: Function
): Function;
export function promap<T, T1, T2>(
  f: (x: T) => T1,
  g: (a: T1) => T2,
  a: Profunctor<T>
): Profunctor<T2>;

export function promap(f, g, a) {
  const apply = obj => obj.methods.promap(f, g, a);

  if (func.is(a)) {
    return apply(func);
  }

  return a.promap(f, g);
}
