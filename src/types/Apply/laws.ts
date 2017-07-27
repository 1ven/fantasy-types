import { ap, map } from "../../types";

export const composition = (v, u, a, exp = expect) => {
  exp(ap(ap(map((f: any) => g => x => f(g(x)), a), u), v)).toEqual(
    ap(a, ap(u, v))
  );
};
