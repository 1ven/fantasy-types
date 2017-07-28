import * as array from "../../built-in/Array";
import * as func from "../../built-in/Function";
import { Apply } from "../Apply";
import { curry } from "../../methods";

export interface Applicative<T> extends Apply<T> {}

export interface ApplicativeConstructor {
  // new <T1>(a: T1): Applicative<T1>;
  of: <T1>(a: T1) => Applicative<T1>;
}

export type OfFunction = {
  /**
   * Array
   */
  <T>(A: ArrayConstructor, a: T): Array<T>;
  <T>(A: ArrayConstructor): (a: T) => Array<T>;
  /**
   * Function
   */
  <T>(A: FunctionConstructor, a: T): Function;
  <T>(A: FunctionConstructor): (a: T) => Function;
  /**
   * Applicative
   */
  <T>(A: ApplicativeConstructor, a: T): Applicative<T>;
  <T>(A: ApplicativeConstructor): (a: T) => Applicative<T>;
};

export const of: OfFunction = curry((A, a) => {
  const apply = obj => obj.methods.of(a);

  if (array.isConstructor(A)) {
    return apply(array);
  }

  if (func.isConstructor(A)) {
    return apply(func);
  }

  return A.of(a);
});
