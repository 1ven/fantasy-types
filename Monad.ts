import { Applicative, ApplicativeConstructor } from "./Applicative";
import { Chain } from "./Chain";

export interface Monad<T> extends Applicative<T>, Chain<T> {}

export interface MonadConstructor extends ApplicativeConstructor {
  of: <T1>(a: T1) => Monad<T1>;
}
