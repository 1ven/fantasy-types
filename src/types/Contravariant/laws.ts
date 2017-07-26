import { Contravariant } from "./";

export const identity = <T>(u: Contravariant<T>) => {
  expect(u.contramap(a => a)).toEqual(u);
};

export const composition = <T>(u: Contravariant<T>, f, g) => {
  expect(u.contramap(x => f(g(x)))).toEqual(u.contramap(f).contramap(g));
};
