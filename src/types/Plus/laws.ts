import { PlusConstructor } from "./";
import { Alt } from "../Alt";

export const rightIdentity = <T>(A: PlusConstructor, x: Alt<T>) => {
  expect(x.alt(A.zero())).toEqual(x);
};

export const leftIdentity = <T>(A: PlusConstructor, x: Alt<T>) => {
  expect(A.zero().alt(x)).toEqual(x);
};

export const annihilation = (A: PlusConstructor, f) => {
  expect(A.zero().map(f)).toEqual(A.zero());
};
