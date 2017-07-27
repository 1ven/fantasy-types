import * as F from "../../types";

import id from "./id";
import of from "./of";
import equals from "./equals";
import compose from "./compose";
import map from "./map";
import promap from "./promap";
import ap from "./ap";
import chain from "./chain";
import contramap from "./contramap";

export interface FunctionExtended<T>
  extends F.Functor<T>,
    F.Profunctor<T>,
    F.Apply<T>,
    F.Applicative<T>,
    F.Chain<T>,
    F.Contravariant<T>,
    F.Setoid,
    F.Semigroupoid,
    F.Category {}

export interface Constructor
  extends F.ApplicativeConstructor,
    F.CategoryConstructor {
  new (...args: Array<string>);
}

export const is = (val: any): val is Function => typeof val === "function";
export const isConstructor = (Ctor: any): Ctor is FunctionConstructor =>
  Ctor === Function;

export const methods = {
  id,
  of,
  equals,
  compose,
  map,
  promap,
  ap,
  chain,
  contramap
};
