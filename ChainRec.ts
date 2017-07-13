import { Chain } from "./Chain";

export interface ChainRec<T> extends Chain<T> {}

export interface ChainRecConstructor {
  chainRec: <T1, T2, T3>(
    f: (
      next: (a: T1) => T2,
      done: (a: T1) => T3,
      value: T1
    ) => ChainRec<T2 | T3>,
    i: T1
  ) => ChainRec<T3>;
}
