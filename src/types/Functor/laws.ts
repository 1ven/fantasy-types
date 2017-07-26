import * as F from "../../";
import { Functor } from "./";

export const identity = <T>(u: Functor<T>) => {
  expect(u.map(a => a)).toEqual(u);
};

export const composition = <T>(u: Functor<T>, f, g) => {
  expect(u.map(x => f(g(x)))).toEqual(u.map(g).map(f));
};

export const identity1 = (u, exp = expect) => {
  exp(F.map(a => a, u)).toEqual(u);
};

export const composition1 = (u, f, g, exp = expect) => {
  exp(F.map(x => f(g(x)), u)).toEqual(F.map(f, F.map(g, u)));
};
