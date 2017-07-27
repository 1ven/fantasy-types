import { promap } from "../../types";

export const identity = (p, exp = expect) => {
  exp(promap(a => a, b => b, p)).toEqual(p);
};

export const composition = (p, f, g, h, i, exp = expect) => {
  exp(promap(a => f(g(a)), b => h(i(b)), p)).toEqual(
    promap(g, h, promap(f, i, p))
  );
};
