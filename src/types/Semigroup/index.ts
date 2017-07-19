import * as array from "../../built-in/Array";

export interface Semigroup {
  concat: (a: Semigroup) => Semigroup;
  // concat: <T extends Semigroup>(a: T) => typeof a;
}

export const concat = function<T extends Semigroup>(a: typeof b, b: T) {
  if (array.is(b)) {
    return array.extended.prototype.concat.apply(b, [a]);
  }

  return b.concat(a);
};
