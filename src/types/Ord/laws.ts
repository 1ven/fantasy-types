import { Ord } from "./";

export const totality = (a: Ord, b: Ord) => {
  expect(a.lte(b) || b.lte(a)).toBeTruthy();
};

export const antisymmetry = (a: Ord, b: Ord) => {
  expect(a.lte(b)).toBeTruthy();
  expect(b.lte(a)).toBeTruthy();
  expect(a.equals(b)).toBeTruthy();
};

export const transitivity = (a: Ord, b: Ord, c: Ord) => {
  expect(a.lte(b)).toBeTruthy();
  expect(b.lte(c)).toBeTruthy();
  expect(a.lte(c)).toBeTruthy();
};
