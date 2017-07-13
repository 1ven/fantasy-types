import { Functor } from "./Functor";

export interface Bifunctor<T> extends Functor<T> {
  bimap: <T1, T2>(f: (a: T) => T1, g: (a: T) => T2) => Bifunctor<T1 | T2>;
}
