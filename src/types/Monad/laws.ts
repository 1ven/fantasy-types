import { of, chain } from "../../";

export const leftIdentity = (M, a, f, exp = expect) => {
  exp(chain(f, of(M, a))).toEqual(f(a));
};

export const rightIdentity = (M, m, exp = expect) => {
  exp(chain(M.of.bind(M), m)).toEqual(m);
};
