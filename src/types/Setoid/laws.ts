import { equals } from "../../";
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

export const reflexivity1 = (a, exp = expect) => {
  exp(equals(a, a)).toBeTruthy();
};

export const symmetry1 = (a, b, exp = expect) => {
  exp(equals(a, b) === equals(b, a)).toBeTruthy();
};

export const transitivity1 = (a, b, c, exp = expect) => {
  exp(equals(a, b)).toBeTruthy();
  exp(equals(b, c)).toBeTruthy();
  exp(equals(a, c)).toBeTruthy();
};
