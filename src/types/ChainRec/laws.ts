import { chainRec, chain, map } from "../../types";

export const equivalence = (M, p, d, n, i, exp = expect) => {
  exp(
    chainRec(
      M,
      (next, done, v) => (p(v) ? map(done, d(v)) as any : map(next, n(v))),
      i
    )
  ).toEqual(
    (function step(v) {
      return p(v) ? d(v) : chain(step, n(v));
    })(i)
  );
};
