import * as array from "../../built-in/Array";
import { Apply } from "../Apply";

export interface Chain<T> extends Apply<T> {
  chain: <T1>(f: (x: T) => Chain<T1>) => Chain<T1>;
}

export function chain<T, T1>(f: (x: T) => Array<T1>, a: Array<T>): Array<T1>;
export function chain<T, T1>(f: (x: T) => Chain<T1>, a: Chain<T>): Chain<T1>;

export function chain<T, T1>(f, a) {
  const apply = obj => obj.extended.prototype.chain.apply(a, [f]);

  if (array.is(a)) {
    return apply(array);
  }

  return a.chain(f);
}
