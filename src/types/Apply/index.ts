import * as array from "../../built-in/Array";
import { Functor } from "../Functor";

export interface Apply<T> extends Functor<T> {
  ap: <T1>(a: Apply<(b: T) => T1>) => Apply<T1>;
}

export const ap = function<T, T1>(a: Apply<(x: T) => T1>, b: Apply<T>) {
  if (array.is(b)) {
    return array.extended.prototype.ap.apply(b, [a]);
  }

  return b.ap(a);
};
