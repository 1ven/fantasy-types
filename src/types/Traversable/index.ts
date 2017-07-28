import * as array from "../../built-in/Array";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";
import { Functor } from "../Functor";
import { Foldable } from "../Foldable";
import { Applicative, ApplicativeConstructor } from "../Applicative";
import { curry } from "../../methods";

export interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse: <T1>(
    A: ApplicativeConstructor,
    f: (a: T) => Applicative<T1>
  ) => Applicative<T1 | Traversable<T>>;
}

export type TraversePartial1 = {
  <T, T1>(a: PlainObject<T>): T1;
  <T, T1>(a: Array<T>): T1;
  <T, T1>(a: Traversable<T>): T1;
};

export type TraversePartial2 = {
  <T, T1>(f: (a: T) => Applicative<T1>, a: PlainObject<T>): T1;
  <T, T1>(f: (a: T) => Applicative<T1>, a: Array<T>): T1;
  <T, T1>(f: (a: T) => Applicative<T1>, a: Traversable<T>): T1;
};

export type TraverseFunction = {
  /**
   * PlainObject
   */
  <T, T1>(
    A: ApplicativeConstructor,
    f: (a: T) => Applicative<T1>,
    a: PlainObject<T>
  ): Applicative<T1 | PlainObject<T>>;
  /**
   * Array
   */
  <T, T1>(
    A: ApplicativeConstructor,
    f: (a: T) => Applicative<T1>,
    a: Array<T>
  ): Applicative<T1 | Array<T>>;
  /**
   * Traversable
   */
  <T, T1>(
    A: ApplicativeConstructor,
    f: (a: T) => Applicative<T1>,
    a: Traversable<T>
  ): Applicative<T1 | Traversable<T>>;
  /**
   * Partial application
   */
  <T, T1>(A: ApplicativeConstructor): TraversePartial2;
  <T, T1>(
    A: ApplicativeConstructor,
    f: (a: T) => Applicative<T1>
  ): TraversePartial1;
  <T, T1>(A: ApplicativeConstructor): (
    f: (a: T) => Applicative<T1>
  ) => TraversePartial1;
};

export const traverse: TraverseFunction = curry((A, f, a) => {
  const apply = obj => obj.methods.traverse(A, f, a);

  if (object.is(a)) {
    return apply(object);
  }

  if (array.is(a)) {
    return apply(array);
  }

  return a.traverse(A, f);
});
