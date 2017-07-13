import { Functor } from "./Functor";
import { Foldable } from "./Foldable";
import { ApplicativeConstructor } from "./Applicative";

export interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse: (
    A: ApplicativeConstructor,
    f: (a: T) => Traversable<T>
  ) => Traversable<T>;
}
