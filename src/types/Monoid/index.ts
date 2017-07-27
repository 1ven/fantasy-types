import * as array from "../../built-in/Array";
import * as string from "../../built-in/String";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";
import { Semigroup } from "../Semigroup";

export interface Monoid extends Semigroup {}

export interface MonoidConstructor {
  // new (): Monoid;
  empty: () => Monoid;
}

export function empty(M: ObjectConstructor): PlainObject<void>;
export function empty(M: ArrayConstructor): Array<void>;
export function empty(M: StringConstructor): String;
export function empty(M: MonoidConstructor): Monoid;

export function empty(M) {
  const apply = obj => obj.extended.empty.apply(M);
  const apply1 = obj => obj.methods.empty();

  if (object.isConstructor(M)) {
    return apply(object);
  }

  if (array.isConstructor(M)) {
    return apply1(array);
  }

  if (string.isConstructor(M)) {
    return apply(string);
  }

  return M.empty();
}
