import * as array from "../../built-in/Array";
import * as boolean from "../../built-in/Boolean";
import * as date from "../../built-in/Date";
import * as number from "../../built-in/Number";
import * as string from "../../built-in/String";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";
import { Setoid } from "../Setoid";
import { curry } from "../../methods";

export interface Ord extends Setoid {
  lte: (a: Ord) => boolean;
}

export type LteFunction = {
  /**
   * PlainObject
   */
  <T>(a: PlainObject<T>, b: PlainObject<T>): boolean;
  <T>(a: PlainObject<T>): (b: PlainObject<T>) => boolean;
  /**
   * Array
   */
  <T>(a: Array<T>, b: Array<T>): boolean;
  <T>(a: Array<T>): (b: Array<T>) => boolean;
  /**
   * Date
   */
  (a: Date, b: Date): boolean;
  (a: Date): (b: Date) => boolean;
  /**
   * Boolean
   */
  (a: boolean, b: boolean): boolean;
  (a: boolean): (b: boolean) => boolean;
  /**
   * Number
   */
  (a: number, b: number): boolean;
  (a: number): (b: number) => boolean;
  /**
   * String
   */
  (a: string, b: string): boolean;
  (a: string): (b: string) => boolean;
  /**
   * Ord
   */
  <T extends Ord>(a: T, b: typeof a): boolean;
  <T extends Ord>(a: T): (b: typeof a) => boolean;
};

export const lte: LteFunction = curry((a, b) => {
  const apply = obj => obj.methods.lte(a, b);

  if (object.is(b)) {
    return apply(object);
  }

  if (array.is(b)) {
    return apply(array);
  }

  if (boolean.is(b)) {
    return apply(boolean);
  }

  if (date.is(b)) {
    return apply(date);
  }

  if (number.is(b)) {
    return apply(number);
  }

  if (string.is(b)) {
    return apply(string);
  }

  return b.lte(a);
});
