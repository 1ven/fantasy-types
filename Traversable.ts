import { Functor } from "./Functor";
import { Foldable } from "./Foldable";
import { Applicative } from "./Applicative";

export interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse: (
    // constructor
    A: Applicative<T>,
    f: (a: T) => Traversable<T>
  ) => Traversable<T>;
}
