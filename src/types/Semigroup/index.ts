import * as array from "../../built-in/Array";

export interface Semigroup {
  concat: (a: Semigroup) => Semigroup;
  // concat: <T extends Semigroup>(a: T) => typeof a;
}

export const concat = function<T extends Semigroup>(a: typeof b, b: T) {
  const apply = obj => obj.extended.prototype.concat.apply(b, [a]);

  if (array.is(b)) {
    return apply(array);
  }

  return b.concat(a);
};
