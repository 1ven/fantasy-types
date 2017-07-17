import { Functor } from "./Functor";

export interface Profunctor<T> extends Functor<T> {
  promap: <T1, T2>(f: (a: T) => T1, g: (a: T1) => T2) => Profunctor<T2>;
}
