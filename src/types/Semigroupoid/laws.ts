import { Semigroupoid } from "./";

export const associativity = (
  a: Semigroupoid,
  b: Semigroupoid,
  c: Semigroupoid
) => {
  expect(a.compose(b.compose(c))).toEqual(a.compose(b).compose(c));
};
