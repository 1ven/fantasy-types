import { Functor } from './Functor';

export type Bifunctor<T> = Functor<T> & {
  bimap: <T1, T2>(f: () => T1, g: () => T2) => Bifunctor<T1 |T2>;
}