import * as F from "../../types";
import { extendClass } from "../../utils";

import equals from "./equals";

export interface Constructor {
  new <T>(val: T): RegExpExtended;
}

export interface RegExpExtended extends F.Setoid {}

export const is = <T>(val: any): val is RegExp => val instanceof RegExp;
export const isConstructor = (Ctor: any): Ctor is RegExpConstructor =>
  Ctor === RegExp;

export const extended = {
  prototype: {
    equals
  }
};

const RegExpExtended: Constructor = extendClass(RegExp, extended);

export default RegExpExtended;
