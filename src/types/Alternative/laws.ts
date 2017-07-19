import { Alternative } from "./";
import { PlusConstructor } from "../Plus";

export const distributivity = <T>(
  x: Alternative<T>,
  f: Alternative<(a) => T>,
  g: Alternative<(a) => T>
) => {
  expect(x.ap(f.alt(g) as any)).toEqual((x.ap(f) as any).alt(x.ap(g)));
};

export const annihilation = <T>(A: PlusConstructor, x: Alternative<T>) => {
  expect(x.ap(A.zero() as any)).toEqual(A.zero());
};
