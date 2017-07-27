import * as array from "../../built-in/Array";
import * as func from "../../built-in/Function";
import { Apply } from "../Apply";

export interface Applicative<T> extends Apply<T> {}

export interface ApplicativeConstructor {
  // new <T1>(a: T1): Applicative<T1>;
  of: <T1>(a: T1) => Applicative<T1>;
}

export function of<T>(A: ArrayConstructor, a: T): Array<T>;
export function of<T>(A: FunctionConstructor, a: T): Function;
export function of<T>(A: ApplicativeConstructor, a: T): Applicative<T>;

export function of<T>(A, a) {
  const apply = obj => obj.methods.of(a);

  if (array.isConstructor(A)) {
    return apply(array);
  }

  if (func.isConstructor(A)) {
    return apply(func);
  }

  return A.of(a);
}
