import { Profunctor } from "./";

export const identity = <T>(p: Profunctor<T>) => {
  expect(p.promap(a => a, b => b)).toEqual(p);
};

export const composition = <T>(p: Profunctor<T>, f, g, h, i) => {
  expect(p.promap(a => f(g(a)), b => h(i(b)))).toEqual(
    p.promap(f, i).promap(g, h)
  );
};
