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

export type EmptyFunction = {
  /**
   * PlainObject
   */
  (M: ObjectConstructor): PlainObject<void>;
  /**
   * Array
   */
  (M: ArrayConstructor): Array<void>;
  /**
   * String
   */
  (M: StringConstructor): String;
  /**
   * Monoid
   */
  (M: MonoidConstructor): Monoid;
};

export const empty: EmptyFunction = M => {
  const apply = obj => obj.methods.empty();

  if (object.isConstructor(M)) {
    return apply(object);
  }

  if (array.isConstructor(M)) {
    return apply(array);
  }

  if (string.isConstructor(M)) {
    return apply(string);
  }

  return M.empty();
};
