import * as array from "../../built-in/Array";
import * as func from "../../built-in/Function";
import { Apply } from "../Apply";

export interface Chain<T> extends Apply<T> {
  chain: <T1>(f: (x: T) => Chain<T1>) => Chain<T1>;
}

export function chain<T, T1>(f: (x: T) => Array<T1>, a: Array<T>): Array<T1>;
export function chain<T, T1>(f: (x: T) => Function, a: Function): Function;
export function chain<T, T1>(f: (x: T) => Chain<T1>, a: Chain<T>): Chain<T1>;

export function chain<T, T1>(f, a) {
  const apply = obj => obj.extended.prototype.chain.apply(a, [f]);
  const apply1 = obj => obj.methods.chain(f, a);

  if (array.is(a)) {
    return apply1(array);
  }

  if (func.is(a)) {
    return apply1(func);
  }

  return a.chain(f);
}
