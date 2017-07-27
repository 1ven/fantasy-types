import * as F from "../../types";

import equals from "./equals";
import lte from "./lte";

export interface Constructor {
  new (value: number): DateExtended;
}

export interface DateExtended extends F.Setoid, F.Ord {}

export const is = <T>(val: any): val is Date => val instanceof Date;
export const isConstructor = (Ctor: any): Ctor is DateConstructor =>
  Ctor === Date;

export const methods = {
  equals,
  lte
};
