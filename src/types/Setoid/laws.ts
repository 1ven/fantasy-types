import { equals } from "../../";

export const reflexivity = (a, exp = expect) => {
  exp(equals(a, a)).toBeTruthy();
};

export const symmetry = (a, b, exp = expect) => {
  exp(equals(a, b) === equals(b, a)).toBeTruthy();
};

export const transitivity = (a, b, c, exp = expect) => {
  exp(equals(a, b)).toBeTruthy();
  exp(equals(b, c)).toBeTruthy();
  exp(equals(a, c)).toBeTruthy();
};
