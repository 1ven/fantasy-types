import { of, ap } from "../../";
import { Applicative, ApplicativeConstructor } from "./";

export const identity = <T>(A: ApplicativeConstructor, v: Applicative<T>) => {
  expect(v.ap(A.of(x => x))).toEqual(v);
};

export const homomorphism = <T>(A: ApplicativeConstructor, x: T, f) => {
  expect(A.of(x).ap(A.of(f))).toEqual(A.of(f(x)));
};

export const interchange = <T, T1>(
  A: ApplicativeConstructor,
  y: T1,
  u: Applicative<(a) => T>
) => {
  expect(A.of(y).ap(u)).toEqual(u.ap(A.of(f => f(y))));
};

export const identity1 = (A, v, exp = expect) => {
  exp(ap(of(A, x => x), v)).toEqual(v);
};

export const homomorphism1 = (A, x, f, exp = expect) => {
  exp(ap(of(A, f), of(A, x))).toEqual(of(A, f(x)));
};

export const interchange1 = (A, y, u, exp = expect) => {
  exp(ap(u, of(A, y))).toEqual(ap(of(A, f => f(y)), u));
};
