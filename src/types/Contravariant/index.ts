import * as func from "../../built-in/Function";
import { curry } from "../../methods";

// the opposite as Functor `.map`
export interface Contravariant<T> {
  contramap: <T1>(fn: (a: T) => T1) => Contravariant<T>;
}

export type ContramapFunction = {
  /**
   * Function
   */
  <T, T1>(f: (x: T) => T1, a: Function): Function;
  <T, T1>(f: (x: T) => T1): (a: Function) => Function;
  /**
   * Contravariant
   */
  <T, T1>(f: (x: T) => T1, a: Contravariant<T>): Contravariant<T1>;
  <T, T1>(f: (x: T) => T1): (a: Contravariant<T>) => Contravariant<T1>;
};

export const contramap: ContramapFunction = curry((f, a) => {
  const apply = obj => obj.methods.contramap(f, a);

  if (func.is(a)) {
    return apply(func);
  }

  return a.contramap(f);
});
