import * as array from "../../built-in/Array";
import * as string from "../../built-in/String";

export interface Semigroup {
  concat: (a: Semigroup) => Semigroup;
  // concat: <T extends Semigroup>(a: T) => typeof a;
}

export const concat = function<T extends Semigroup>(a: typeof b, b: T) {
  const apply = obj => obj.extended.prototype.concat.apply(b, [a]);

  if (array.is(b)) {
    return apply(array);
  }

  if (string.is(b)) {
    return apply(string);
  }

  return b.concat(a);
};
