import * as array from "../../built-in/Array";
import * as string from "../../built-in/String";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";
import { curry } from "../../methods";

export interface Semigroup {
  concat: (a: Semigroup) => Semigroup;
  // concat: <T extends Semigroup>(a: T) => typeof a;
}

export type ConcatFunction = {
  /**
   * PlainObject
   */
  <T, T1>(a: PlainObject<T>, b: PlainObject<T1>): PlainObject<T & T1>;
  <T, T1>(a: PlainObject<T>): (b: PlainObject<T1>) => PlainObject<T & T1>;
  /**
   * Array
   */
  <T>(a: Array<T>, b: Array<T>): Array<T>;
  <T>(a: Array<T>): (b: Array<T>) => Array<T>;
  /**
   * String
   */
  (a: string, b: string): string;
  (a: string): (b: string) => string;
  /**
   * Semigroup
   */
  <T extends Semigroup>(a: T, b: typeof a): Semigroup;
  <T extends Semigroup>(a: T): (b: typeof a) => Semigroup;
};

export const concat: ConcatFunction = curry((a, b) => {
  const apply = obj => obj.methods.concat(a, b);

  if (object.is(b)) {
    return apply(object);
  }

  if (array.is(b)) {
    return apply(array);
  }

  if (string.is(b)) {
    return apply(string);
  }

  return b.concat(a);
});
