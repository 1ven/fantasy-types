import { ChainRec, ChainRecConstructor } from "./";

export const equivalence = (M: ChainRecConstructor, p, d, n, i) => {
  expect(
    M.chainRec((next, done, v) => (p(v) ? d(v).map(done) : n(v).map(next)), i)
  ).toEqual(
    (function step(v) {
      return p(v) ? d(v) : n(v).chain(step);
    })(i)
  );
};
