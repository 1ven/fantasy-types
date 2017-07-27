import * as array from "../../built-in/Array";
import { Chain } from "../Chain";

export interface ChainRec<T> extends Chain<T> {}

export type ChainRecCb<T1, T2, T3, T4> = (
  next: (
    a: T1
  ) => {
    value: T2;
    done: boolean;
  },
  done: (
    a: T1
  ) => {
    value: T3;
    done: boolean;
  },
  value: T1
) => T4;

export interface ChainRecConstructor {
  chainRec: <T1, T2, T3>(
    f: ChainRecCb<T1, T2, T3, ChainRec<T2 | T3>>,
    i: T1
  ) => ChainRec<T3>;
}

export function chainRec<T1, T2, T3>(
  C: ArrayConstructor,
  f: ChainRecCb<T1, T2, T3, Array<T2 | T3>>,
  i: T1
): Array<T2 | T3>;
export function chainRec<T1, T2, T3>(
  C: ChainRecConstructor,
  f: ChainRecCb<T1, T2, T3, ChainRec<T2 | T3>>,
  i: T1
): ChainRec<T2 | T3>;

export function chainRec(C, f, i) {
  const apply = obj => obj.methods.chainRec(f, i);

  if (array.isConstructor(C)) {
    return apply(array);
  }

  return C.chainRec(f, i);
}
