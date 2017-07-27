import { of, ap } from "../../types";

export const identity = (A, v, exp = expect) => {
  exp(ap(of(A, x => x), v)).toEqual(v);
};

export const homomorphism = (A, x, f, exp = expect) => {
  exp(ap(of(A, f), of(A, x))).toEqual(of(A, f(x)));
};

export const interchange = (A, y, u, exp = expect) => {
  exp(ap(u, of(A, y))).toEqual(ap(of(A, f => f(y)), u));
};
