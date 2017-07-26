import { chain } from "../../";

export const associativity = (m, f, g, exp = expect) => {
  exp(chain(g, chain(f, m))).toEqual(chain(x => chain(g, f(x)), m));
};
