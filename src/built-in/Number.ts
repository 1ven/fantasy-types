import { Setoid, Ord } from "../abstract-types";

export const isNumber = (n: number): n is number => {
  return typeof n === "number";
};

export const equals = (a, b) => {};

export const lte = (a, b) => {};
