import {
  Setoid,
  Ord,
  Semigroup,
  Monoid,
  Functor,
  Apply,
  Applicative,
  Chain,
  ChainRec,
  Alt,
  Plus,
  Foldable,
  Traversable,
  Extend
} from "../abstract-types";
import { ApplicativeConstructor } from "../abstract-types";

export const equals = (a, b) => {};

export const lte = (a, b) => {};

export const concat = (a, b) => {};

export const empty = (M: ArrayConstructor) => new Array();

export const map = <T, T1>(cb: (a: T) => T1, arr: Array<T>) => {};

export const ap = <T, T1>(a: Array<(x: T) => T1>, b: Array<T>) => {};

export const of = <T>(A: ArrayConstructor, a: T) => A(a);

export const chain = <T, T1>(f: (a: T) => Array<T1>, arr: Array<T>) => {};

export const chainRec = <T1, T2, T3>(
  f: (next: (a: T1) => T2, done: (a: T1) => T3, value: T1) => Array<T2 | T3>,
  i: T1
) => {};

export const alt = <T1, T2>(a: Array<T1>, b: Array<T2>) => {};

export const zero = (P: ArrayConstructor) => new Array();

export const reduce = <T, T1>(
  f: (acc: T1, val: T) => T1,
  initial: T1,
  arr: Array<T>
) => {};

export const traverse = <T, T1>(
  A: ApplicativeConstructor,
  f: (a: T) => Applicative<T1>,
  arr: Array<T>
) => {};

export const extend = <T, T1>(f: (a: Array<T>) => T1, arr: Array<T>) => {};
