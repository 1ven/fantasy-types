import * as F from "../../types";

export const identity = (p, exp = expect) => {
  exp(F.promap(a => a, b => b, p)).toEqual(p);
};

export const composition = (p, f, g, h, i, exp = expect) => {
  exp(F.promap(a => f(g(a)), b => h(i(b)), p)).toEqual(
    F.promap(g, h, F.promap(f, i, p))
  );
};
