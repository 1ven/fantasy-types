import { concat, empty } from "../../types";

export const rightIdentity = (M, m, exp = expect) => {
  exp(concat(empty(M), m)).toEqual(m);
};

export const leftIdentity = (M, m, exp = expect) => {
  exp(concat(m, empty(M))).toEqual(m);
};
