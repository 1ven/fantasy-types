import { Functor } from './Functor';
import { Foldable } from './Foldable';
import { ApplicativeStatic } from './Applicative';

export type Traversable<T> = Functor<T> & Foldable<T> & {
  traverse: (A: ApplicativeStatic, f: (a: T) => Traversable<T>) => Traversable<T>;
}