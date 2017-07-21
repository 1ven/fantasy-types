import * as array from "../../built-in/Array";
import { Apply } from "../Apply";

export interface Applicative<T> extends Apply<T> {}

export interface ApplicativeConstructor {
  // new <T1>(a: T1): Applicative<T1>;
  of: <T1>(a: T1) => Applicative<T1>;
}

export function of<T>(A: ArrayConstructor, a: T): Array<T>;
export function of<T>(A: ApplicativeConstructor, a: T): Applicative<T>;

export function of<T>(A, a) {
  const apply = obj => obj.extended.of.apply(A, [a]);

  if (array.isConstructor(A)) {
    return apply(array);
  }

  return A.of(a);
}
