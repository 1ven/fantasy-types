import * as array from "../../built-in/Array";

export interface Setoid {
  // TODO: how to reflect, that `a` should be Setoid of the same type?
  equals: (a: Setoid) => boolean;
}

export const equals = function<T extends Setoid>(a: typeof b, b: T) {
  if (array.is(b)) {
    return array.extended.prototype.equals.apply(b, [a]);
  }

  return b.equals(a);
};
