import * as F from "../../types";
import { extendClass } from "../../utils";

import equals from "./equals";
import lte from "./lte";

export interface Constructor {
  new <T>(value: T): BooleanExtended;
}

export interface BooleanExtended extends F.Setoid, F.Ord {}

export const is = <T>(val: any): val is Boolean => typeof val === "boolean";
export const isConstructor = (Ctor: any): Ctor is BooleanConstructor =>
  Ctor === Boolean;

export const extended = {
  prototype: {
    equals,
    lte
  }
};

const BooleanExtended: Constructor = extendClass(Boolean, extended);

export default BooleanExtended;
