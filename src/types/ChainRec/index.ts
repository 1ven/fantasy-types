import * as array from "../../built-in/Array";
import { Chain } from "../Chain";

export interface ChainRec<T> extends Chain<T> {}

export interface ChainRecConstructor {
  chainRec: <T1, T2, T3>(
    f: (
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
    ) => ChainRec<T2 | T3>,
    i: T1
  ) => ChainRec<T3>;
}

export const chainRec = <T1, T2, T3>(
  C: ChainRecConstructor,
  f: (
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
  ) => ChainRec<T2 | T3>,
  i: T1
) => {
  const apply = obj => obj.extended.chainRec.apply(C, [f, i]);

  if (array.isConstructor(C)) {
    return apply(array);
  }

  return C.chainRec(f, i);
};
