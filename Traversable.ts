import { Functor } from "./Functor";
import { Foldable } from "./Foldable";
import { ApplicativeConstructor } from "./Applicative";

export type Traversable<T> = Functor<T> &
  Foldable<T> & {
    traverse: (
      A: ApplicativeConstructor,
      f: (a: T) => Traversable<T>
    ) => Traversable<T>;
  };
