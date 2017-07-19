import { Semigroup } from "./";

export const associativity = (a: Semigroup, b: Semigroup, c: Semigroup) => {
  expect(a.concat(b).concat(c)).toEqual(a.concat(b.concat(c)));
};
