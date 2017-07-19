import * as array from "../../built-in/Array";
import { Applicative, ApplicativeConstructor } from "../Applicative";
import { Chain } from "../Chain";

export interface Monad<T> extends Applicative<T>, Chain<T> {}

export interface MonadConstructor extends ApplicativeConstructor {
  of: <T1>(a: T1) => Monad<T1>;
}

export const of = function<T>(M: MonadConstructor, a: T) {
  if (array.isConstructor(M)) {
    return array.extended.of.apply(M, [a]);
  }

  return M.of(a);
};
