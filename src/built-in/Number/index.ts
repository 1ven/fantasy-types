import * as F from "../../types";

import equals from "./equals";
import lte from "./lte";

export interface Constructor {
  new (value: number): NumberExtended;
}

export interface NumberExtended extends F.Setoid, F.Ord {}

export const is = <T>(val: any): val is Number =>
  typeof val === "number" || val instanceof Number;
export const isConstructor = (Ctor: any): Ctor is NumberConstructor =>
  Ctor === Number;

export const methods = {
  equals,
  lte
};
