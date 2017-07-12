import { Functor } from './Functor';

export type Alt<T> = Functor<T> & {
  alt: <T1>(a: Alt<T1>) => Alt<T | T1>;
}