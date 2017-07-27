import { lte, equals } from "../../types";

export const totality = (a, b, exp = expect) => {
  exp(lte(b, a) || lte(a, b)).toBeTruthy();
};

export const antisymmetry = (a, b, exp = expect) => {
  exp(lte(b, a)).toBeTruthy();
  exp(lte(a, b)).toBeTruthy();
  exp(equals(a, b)).toBeTruthy();
};

export const transitivity = (a, b, c, exp = expect) => {
  exp(lte(b, a)).toBeTruthy();
  exp(lte(c, b)).toBeTruthy();
  exp(lte(c, a)).toBeTruthy();
};
