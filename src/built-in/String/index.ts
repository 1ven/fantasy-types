import * as F from "../../types";

import equals from "./equals";
import lte from "./lte";
import concat from "./concat";
import empty from "./empty";

export interface Constructor extends F.MonoidConstructor {
  new <T>(value: T): StringExtended;
}

export interface StringExtended
  extends F.Setoid,
    F.Ord,
    F.Monoid,
    F.Semigroup {}

export const is = (val: any): val is String =>
  typeof val === "string" || val instanceof String;
export const isConstructor = (Ctor: any): Ctor is StringConstructor =>
  Ctor === String;

export const methods = {
  empty,
  concat,
  equals,
  lte
};
