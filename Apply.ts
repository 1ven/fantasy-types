import { Functor } from './Functor';

export type Apply<T> = Functor<T> & {
  ap: <T1>(a: Apply<(b: T) => T1>) => Apply<T1>;
}