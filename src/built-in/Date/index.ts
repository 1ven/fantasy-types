import * as F from "../../types";
import { extendClass } from "../../utils";

import equals from "./equals";
import lte from "./lte";

export interface Constructor {
  new (value: number): DateExtended;
}

export interface DateExtended extends F.Setoid, F.Ord {}

export const is = <T>(val: any): val is Date => val instanceof Date;
export const isConstructor = (Ctor: any): Ctor is DateConstructor =>
  Ctor === Date;

export const extended = {
  prototype: {
    equals,
    lte
  }
};

const DateExtended: Constructor = extendClass(Date, extended);

export default DateExtended;
