import { chain } from "../../";
import { Chain } from "./";

export const associativity = <T>(
  m: Chain<T>,
  f: (a: T) => Chain<T>,
  g: (a: T) => Chain<T>
) => {
  expect(m.chain(f).chain(g)).toEqual(m.chain(x => f(x).chain(g)));
};

export const associativity1 = (m, f, g, exp = expect) => {
  exp(chain(g, chain(f, m))).toEqual(chain(x => chain(g, f(x)), m));
};
