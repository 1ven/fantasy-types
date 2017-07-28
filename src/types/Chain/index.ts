import * as array from "../../built-in/Array";
import * as func from "../../built-in/Function";
import { Apply } from "../Apply";
import { curry } from "../../methods";

export interface Chain<T> extends Apply<T> {
  chain: <T1>(f: (x: T) => Chain<T1>) => Chain<T1>;
}

export type ChainFunction = {
  /**
   * Array
   */
  <T, T1>(f: (x: T) => Array<T1>, a: Array<T>): Array<T1>;
  <T, T1>(f: (x: T) => Array<T1>): (a: Array<T>) => Array<T1>;
  /**
   * Function
   */
  <T, T1>(f: (x: T) => Function, a: Function): Function;
  <T, T1>(f: (x: T) => Function): (a: Function) => Function;
  /**
   * Chain
   */
  <T, T1>(f: (x: T) => Chain<T1>, a: Chain<T>): Chain<T1>;
  <T, T1>(f: (x: T) => Chain<T1>): (a: Chain<T>) => Chain<T1>;
};

export const chain: ChainFunction = curry((f, a) => {
  const apply = obj => obj.methods.chain(f, a);

  if (array.is(a)) {
    return apply(array);
  }

  if (func.is(a)) {
    return apply(func);
  }

  return a.chain(f);
});
