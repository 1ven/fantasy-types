import { Functor } from "./Functor";

export type Bifunctor<T> = Functor<T> & {
  bimap: <T1, T2>(f: (a: T) => T1, g: (a: T) => T2) => Bifunctor<T1 | T2>;
};
