import * as func from "../../built-in/Function";
import { curry } from "../../methods";

export interface Semigroupoid {
  compose: (a: Semigroupoid) => Semigroupoid;
}

export type ComposeFunction = {
  /**
   * Function
   */
  (a: Function, b: Function): Function;
  (a: Function): (b: Function) => Function;
  /**
   * Semigroupoid
   */
  <T extends Semigroupoid>(a: T, b: typeof a): Semigroupoid;
  <T extends Semigroupoid>(a: T): (b: typeof a) => Semigroupoid;
};

export const compose: ComposeFunction = curry((a, b) => {
  const apply = obj => obj.methods.compose(a, b);

  if (func.is(b)) {
    return apply(func);
  }

  return b.compose(a);
});
