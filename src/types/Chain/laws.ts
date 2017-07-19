import { Chain } from "./";

export const associativity = <T>(
  m: Chain<T>,
  f: (a: T) => Chain<T>,
  g: (a: T) => Chain<T>
) => {
  expect(m.chain(f).chain(g)).toEqual(m.chain(x => f(x).chain(g)));
};
