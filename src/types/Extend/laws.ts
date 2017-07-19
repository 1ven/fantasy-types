import { Extend } from "./";

export const associativity = <T>(
  w: Extend<T>,
  g: (a: Extend<T>) => Extend<T>,
  f: (a: Extend<Extend<T>>) => Extend<Extend<T>>
) => {
  expect(w.extend(g).extend(f)).toEqual(w.extend(_w => f(_w.extend(g))));
};
