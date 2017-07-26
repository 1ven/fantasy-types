import { ap, alt, zero } from "../../";

export const distributivity = (x, f, g, exp = expect) => {
  exp(ap(alt(g, f) as any, x)).toEqual(alt(ap(g, x), ap(f, x)));
};

export const annihilation = (A, x, exp = expect) => {
  exp(ap(zero(A) as any, x)).toEqual(zero(A));
};
