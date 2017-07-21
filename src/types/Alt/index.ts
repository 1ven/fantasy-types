import * as array from "../../built-in/Array";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";

import { Functor } from "../Functor";

export interface Alt<T> extends Functor<T> {
  alt: <T1>(a: Alt<T1>) => Alt<T | T1>;
}

export function alt<T, T1>(
  a: PlainObject<T>,
  b: PlainObject<T1>
): PlainObject<T | T1>;
export function alt<T, T1>(a: Array<T>, b: Array<T1>): Array<T | T1>;
export function alt<T extends Alt<T1>, T1>(a: typeof b, b: T): Alt<T1>;

export function alt<T>(a, b) {
  const apply = obj => obj.extended.prototype.alt.apply(b, [a]);

  if (object.is(b)) {
    return apply(object);
  }

  if (array.is(b)) {
    return apply(array);
  }

  return b.alt(a);
}
