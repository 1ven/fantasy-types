import { Foldable } from "./";

export const associativity = <T>(u: Foldable<T>, f) => {
  expect(u.reduce(f, "z")).toEqual(
    u.reduce((acc, x) => acc.concat([x]), []).reduce(f, "z")
  );
};
