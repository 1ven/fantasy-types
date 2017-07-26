import * as F from "../../types";
import { extendClass } from "../../utils";

import equals from "./equals";

export interface Constructor {
  new (msg: string): ErrorExtended;
}

export interface ErrorExtended extends F.Setoid {}

export const is = <T>(val: any): val is Error => val instanceof Error;
export const isConstructor = (Ctor: any): Ctor is ErrorConstructor =>
  Ctor === Error;

export const extended = {
  prototype: {
    equals
  }
};

const ErrorExtended: Constructor = extendClass(Error, extended);

export default ErrorExtended;