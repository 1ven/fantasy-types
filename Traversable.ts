import { Functor } from "./Functor";
import { Foldable } from "./Foldable";
import { Applicative, ApplicativeConstructor } from "./Applicative";

export interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse: <T1>(
    A: ApplicativeConstructor,
    f: (a: T) => Applicative<T1>
  ) => Applicative<T1 | Traversable<T>>;
}
