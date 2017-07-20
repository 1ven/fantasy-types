import * as array from "../../built-in/Array";
import { Apply } from "../Apply";

export interface Applicative<T> extends Apply<T> {}

export interface ApplicativeConstructor {
  // new <T1>(a: T1): Applicative<T1>;
  of: <T1>(a: T1) => Applicative<T1>;
}

export const of = function<T>(A: ApplicativeConstructor, a: T) {
  if (array.isConstructor(A)) {
    return array.extended.of.apply(A, [a]);
  }

  return A.of(a);
};
