import * as array from "../../built-in/Array";
import { Functor } from "../Functor";
import { Foldable } from "../Foldable";
import { Applicative, ApplicativeConstructor } from "../Applicative";

export interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse: <T1>(
    A: ApplicativeConstructor,
    f: (a: T) => Applicative<T1>
  ) => Applicative<T1 | Traversable<T>>;
}

export const traverse = function<T, T1>(
  A: ApplicativeConstructor,
  f: (a: T) => Applicative<T1>,
  a: Traversable<T>
) {
  const apply = obj => obj.extended.prototype.traverse.apply(a, [A, f]);

  if (array.is(a)) {
    return apply(array);
  }

  return a.traverse(A, f);
};
