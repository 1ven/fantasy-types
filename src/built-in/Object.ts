import {
  Setoid,
  Ord,
  Semigroup,
  Monoid,
  Functor,
  Apply,
  Alt,
  Plus,
  Foldable
} from "../abstract-types";
import { Applicative, ApplicativeConstructor } from "../abstract-types";

export const equals = (a, b) => {};

export const lte = (a, b) => {};

export const concat = (a, b) => {};

export const empty = (M: ObjectConstructor) => new Object();

export const map = <T, T1>(cb: (a: T) => T1, obj: Object) => {};

export const ap = <T, T1>(a: Object, b: Object) => {};

export const alt = (a: Object, b: Object) => {};

export const zero = (P: Object) => new Object();

export const reduce = <T, T1>(
  f: (acc: T1, val: T) => T1,
  initial: T1,
  obj: Object
) => {};

export const traverse = <T, T1>(
  A: ApplicativeConstructor,
  f: (a: T) => Applicative<T1>,
  obj: Object
) => {};
