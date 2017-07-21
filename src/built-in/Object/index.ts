import * as F from "../../types";
import * as isPlainObject from "is-plain-object";
import { Setoid, Applicative, ApplicativeConstructor } from "../../types";
import { extendClass } from "../../utils";

import empty from "./empty";
import concat from "./concat";
import alt from "./alt";
import map from "./map";
import reduce from "./reduce";
import equals from "./equals";
import lte from "./lte";
import ap from "./ap";
import traverse from "./traverse";
import zero from "./zero";

export interface Constructor extends F.MonoidConstructor, F.PlusConstructor {
  new <T extends {}>(obj: T): ObjectExtended<T>;
}

export interface ObjectExtended<T>
  extends F.Setoid,
    F.Ord,
    F.Semigroup,
    F.Monoid,
    F.Functor<T>,
    F.Apply<T>,
    F.Alt<T>,
    F.Plus<T>,
    F.Alternative<T>,
    F.Foldable<T>,
    F.Traversable<T> {}

export interface PlainObject<T> {
  [key: string]: T;
}

export const is = <T>(val: any): val is PlainObject<T> => isPlainObject(val);
export const isConstructor = (Ctor: any): Ctor is ObjectConstructor =>
  Ctor === Object;

export const extended = {
  empty,
  zero,
  prototype: {
    concat,
    alt,
    map,
    reduce,
    equals,
    lte,
    ap,
    traverse
  }
};

const ObjectExtended: Constructor = extendClass(Object, extended);

export default ObjectExtended;
