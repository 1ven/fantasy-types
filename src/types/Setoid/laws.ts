import { Setoid } from "./";

export const reflexivity = (a: Setoid) => {
  expect(a.equals(a)).toBeTruthy();
};

export const symmetry = (a: Setoid, b: Setoid) => {
  expect(a.equals(b) === b.equals(a)).toBeTruthy();
};

export const transitivity = (a: Setoid, b: Setoid, c: Setoid) => {
  expect(a.equals(b)).toBeTruthy();
  expect(b.equals(c)).toBeTruthy();
  expect(a.equals(c)).toBeTruthy();
};
