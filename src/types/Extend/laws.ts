import { extend } from "../../types";

export const associativity = <T>(w, g, f, exp = expect) => {
  exp(extend(f, extend(g, w))).toEqual(extend(_w => f(extend(g, _w)), w));
};
