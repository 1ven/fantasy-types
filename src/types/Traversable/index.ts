import * as array from "../../built-in/Array";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";
import { Functor } from "../Functor";
import { Foldable } from "../Foldable";
import { Applicative, ApplicativeConstructor } from "../Applicative";

export interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse: <T1>(
    A: ApplicativeConstructor,
    f: (a: T) => Applicative<T1>
  ) => Applicative<T1 | Traversable<T>>;
}

export function traverse<T, T1>(
  A: ApplicativeConstructor,
  f: (a: T) => Applicative<T1>,
  a: PlainObject<T>
): Applicative<T1 | PlainObject<T>>;

export function traverse<T, T1>(
  A: ApplicativeConstructor,
  f: (a: T) => Applicative<T1>,
  a: Array<T>
): Applicative<T1 | Array<T>>;

export function traverse<T, T1>(
  A: ApplicativeConstructor,
  f: (a: T) => Applicative<T1>,
  a: Traversable<T>
): Applicative<T1 | Traversable<T>>;

export function traverse(A, f, a) {
  const apply = obj => obj.extended.prototype.traverse.apply(a, [A, f]);
  const apply1 = obj => obj.methods.traverse(A, f, a);

  if (object.is(a)) {
    return apply1(object);
  }

  if (array.is(a)) {
    return apply1(array);
  }

  return a.traverse(A, f);
}
