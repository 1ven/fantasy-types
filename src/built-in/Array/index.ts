import * as F from "../../types";
import { Ord, Setoid, Applicative, ApplicativeConstructor } from "../../types";

import chainRec from "./chainRec";
import of from "./of";
import zero from "./zero";
import empty from "./empty";
import concat from "./concat";
import alt from "./alt";
import map from "./map";
import reduce from "./reduce";
import extend from "./extend";
import equals from "./equals";
import lte from "./lte";
import ap from "./ap";
import chain from "./chain";
import traverse from "./traverse";

export interface Constructor
  extends F.MonoidConstructor,
    F.ApplicativeConstructor,
    F.ChainRecConstructor,
    F.PlusConstructor {
  new <T>(...values: T[]): ArrayExtended<T>;
}

export interface ArrayExtended<T>
  extends F.Setoid,
    F.Ord,
    F.Semigroup,
    F.Monoid,
    F.Functor<T>,
    F.Apply<T>,
    F.Applicative<T>,
    F.Chain<T>,
    F.ChainRec<T>,
    F.Alt<T>,
    F.Plus<T>,
    F.Foldable<T>,
    F.Traversable<T>,
    F.Extend<T> {}

export const is = <T>(arr: any): arr is Array<T> => arr instanceof Array;
export const isConstructor = (Ctor: any): Ctor is ArrayConstructor =>
  Ctor === Array;

export const methods = {
  empty,
  zero,
  of,
  chainRec,
  concat,
  alt,
  map,
  reduce,
  extend,
  equals,
  lte,
  ap,
  chain,
  traverse
};
