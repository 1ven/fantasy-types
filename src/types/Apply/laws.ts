import * as F from "../../types";

export const composition = (v, u, a, exp = expect) => {
  exp(F.ap(F.ap(F.map((f: any) => g => x => f(g(x)), a), u), v)).toEqual(
    F.ap(a, F.ap(u, v))
  );
};
