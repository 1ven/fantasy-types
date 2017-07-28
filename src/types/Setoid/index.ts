import * as array from "../../built-in/Array";
import * as func from "../../built-in/Function";
import * as boolean from "../../built-in/Boolean";
import * as date from "../../built-in/Date";
import * as error from "../../built-in/Error";
import * as number from "../../built-in/Number";
import * as regexp from "../../built-in/RegExp";
import * as string from "../../built-in/String";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";
import { curry } from "../../methods";

export interface Setoid {
  equals: (a: Setoid) => boolean;
}

export type EqualsFunction = {
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
   * Function
   */
  (a: Function, b: Function): boolean;
  (a: Function): (b: Function) => boolean;
  /**
   * Date
   */
  (a: Date, b: Date): boolean;
  (a: Date): (b: Date) => boolean;
  /**
   * Error
   */
  (a: Error, b: Error): boolean;
  (a: Error): (b: Error) => boolean;
  /**
   * RegExp
   */
  (a: RegExp, b: RegExp): boolean;
  (a: RegExp): (b: RegExp) => boolean;
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
   * Setoid
   */
  <T extends Setoid>(a: T, b: typeof a): boolean;
  <T extends Setoid>(a: T): (b: typeof a) => boolean;
};

export const equals: EqualsFunction = curry((a, b) => {
  const apply = obj => obj.methods.equals(a, b);

  if (object.is(b)) {
    return apply(object);
  }

  if (array.is(b)) {
    return apply(array);
  }

  if (func.is(b)) {
    return apply(func);
  }

  if (boolean.is(b)) {
    return apply(boolean);
  }

  if (date.is(b)) {
    return apply(date);
  }

  if (error.is(b)) {
    return apply(error);
  }

  if (number.is(b)) {
    return apply(number);
  }

  if (regexp.is(b)) {
    return apply(regexp);
  }

  if (string.is(b)) {
    return apply(string);
  }

  return b.equals(a);
});
