import * as array from "../../built-in/Array";
import { Apply } from "../Apply";

export interface Chain<T> extends Apply<T> {
  chain: <T1>(f: (x: T) => Chain<T1>) => Chain<T1>;
}

export const chain = function<T, T1>(f: (x: T) => Chain<T1>, a: Chain<T>) {
  const apply = obj => obj.extended.prototype.chain.apply(a, [f]);

  if (array.is(a)) {
    return apply(array);
  }

  return a.chain(f);
};
