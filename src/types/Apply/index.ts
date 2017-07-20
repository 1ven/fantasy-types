import * as array from "../../built-in/Array";
import { Functor } from "../Functor";

export interface Apply<T> extends Functor<T> {
  ap: <T1>(a: Apply<(b: T) => T1>) => Apply<T1>;
}

export const ap = function<T, T1>(a: Apply<(x: T) => T1>, b: Apply<T>) {
  const apply = obj => obj.extended.prototype.ap.apply(b, [a]);

  if (array.is(b)) {
    return apply(array);
  }

  return b.ap(a);
};
