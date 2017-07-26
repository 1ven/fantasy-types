import { alt, map } from "../..";

export const associativity = (a, b, c, exp = expect) => {
  exp(alt(c, alt(b, a))).toEqual(alt(alt(c, b), a));
};

export const distributivity = (a, b, f, exp = expect) => {
  exp(map(f, alt(b, a))).toEqual(alt(map(f, b), map(f, a)));
};
