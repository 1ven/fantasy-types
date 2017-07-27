import * as F from "../../types";

import equals from "./equals";
import lte from "./lte";

export interface Constructor {
  new <T>(value: T): BooleanExtended;
}

export interface BooleanExtended extends F.Setoid, F.Ord {}

export const is = <T>(val: any): val is Boolean =>
  typeof val === "boolean" || val instanceof Boolean;
export const isConstructor = (Ctor: any): Ctor is BooleanConstructor =>
  Ctor === Boolean;

export const methods = {
  equals,
  lte
};
