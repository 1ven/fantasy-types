import { Functor } from "./";

export const identity = <T>(u: Functor<T>) => {
  expect(u.map(a => a)).toEqual(u);
};

export const composition = <T>(u: Functor<T>, f, g) => {
  expect(u.map(x => f(g(x)))).toEqual(u.map(g).map(f));
};
