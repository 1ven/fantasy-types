import * as func from "../../built-in/Function";
import { Functor } from "../Functor";
import { curry } from "../../methods";

export interface Profunctor<T> extends Functor<T> {
  promap: <T1, T2>(f: (a: T) => T1, g: (a: T1) => T2) => Profunctor<T2>;
}

export type PromapPartial1 = {
  (a: Function): Function;
  <T, T1>(a: Profunctor<T>): Profunctor<T1>;
};

export type PromapPartial2 = {
  <T1, T2>(g: (a: T1) => T2, a: Function): Function;
  <T, T1, T2>(g: (a: T1) => T2, a: Profunctor<T>): Profunctor<T2>;
};

export type PromapFunction = {
  /**
   * Function
   */
  <T, T1, T2>(f: (x: T) => T1, g: (a: T1) => T2, a: Function): Function;
  /**
   * Profunctor
   */
  <T, T1, T2>(f: (x: T) => T1, g: (a: T1) => T2, a: Profunctor<T>): Profunctor<
    T2
  >;
  /**
   * Partial application
   */
  <T, T1, T2>(f: (x: T) => T1): PromapPartial2;
  <T, T1, T2>(f: (x: T) => T1, g: (a: T1) => T2): PromapPartial1;
  <T, T1, T2>(f: (x: T) => T1): (g: (a: T1) => T2) => PromapPartial1;
};

export const promap: PromapFunction = curry((f, g, a) => {
  const apply = obj => obj.methods.promap(f, g, a);

  if (func.is(a)) {
    return apply(func);
  }

  return a.promap(f, g);
});
