import { alt, zero, map } from "../../";

export const rightIdentity = (A, x, exp = expect) => {
  exp(alt(zero(A), x)).toEqual(x);
};

export const leftIdentity = (A, x, exp = expect) => {
  exp(alt(x, zero(A))).toEqual(x);
};

export const annihilation = (A, f, exp = expect) => {
  exp(map(f, zero(A))).toEqual(zero(A));
};
