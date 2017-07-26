import { compose } from "../../";
import { Semigroupoid } from "./";

export const associativity = (a, b, c, exp = expect) => {
  exp(compose(compose(c, b), a)).toEqual(compose(c, compose(b, a)));
};
