import * as array from "../../built-in/Array";
import * as string from "../../built-in/String";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";

export interface Semigroup {
  concat: (a: Semigroup) => Semigroup;
  // concat: <T extends Semigroup>(a: T) => typeof a;
}

export function concat<T, T1>(
  a: PlainObject<T>,
  b: PlainObject<T1>
): PlainObject<T & T1>;
export function concat<T>(a: typeof b, b: Array<T>): Array<T>;
export function concat(a: typeof b, b: String): String;
export function concat<T extends Semigroup>(a: typeof b, b: T): Semigroup;

export function concat(a, b) {
  const apply = obj => obj.methods.concat(a, b);

  if (object.is(b)) {
    return apply(object);
  }

  if (array.is(b)) {
    return apply(array);
  }

  if (string.is(b)) {
    return apply(string);
  }

  return b.concat(a);
}
