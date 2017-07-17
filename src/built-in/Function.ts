import {
  Setoid,
  Semigroupoid,
  Category,
  Functor,
  Profunctor,
  Apply,
  Applicative,
  Chain,
  Contravariant
} from "../abstract-types";

export const equals = (a, b) => {};

export const compose = (f, g) => {};

export const id = (F: Function) => {};

export const map = <T, T1>(cb: (a: T) => T1, f: Function) => {};

export const promap = <T, T1, T2>(
  a: (x: T) => T1,
  b: (x: T1) => T2,
  f: Function
) => {};

export const ap = <T, T1>(a: Function, b: Function) => {};

export const of = <T>(A: FunctionConstructor, a: T) => () => {};

export const chain = <T, T1>(f: (a: T) => Function, fn: Function) => {};

export const contramap = <T, T1>(cb: (a: T) => T1, f: Function) => {};
