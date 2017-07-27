import { map } from "../../types";

export const identity = (u, exp = expect) => {
  exp(map(a => a, u)).toEqual(u);
};

export const composition = (u, f, g, exp = expect) => {
  exp(map(x => f(g(x)), u)).toEqual(map(f, map(g, u)));
};
