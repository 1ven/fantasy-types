import { contramap } from "../../";
import { Contravariant } from "./";

export const identity = (u, exp = expect) => {
  exp(contramap(a => a, u)).toEqual(u);
};

export const composition = (u, f, g, exp = expect) => {
  exp(contramap(x => f(g(x)), u)).toEqual(contramap(g, contramap(f, u)));
};
