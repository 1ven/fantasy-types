import * as array from "../../built-in/Array";
import * as boolean from "../../built-in/Boolean";
import * as date from "../../built-in/Date";
import * as error from "../../built-in/Error";
import * as number from "../../built-in/Number";
import * as regexp from "../../built-in/RegExp";
import * as string from "../../built-in/String";

export interface Setoid {
  // TODO: how to reflect, that `a` should be Setoid of the same type?
  equals: (a: Setoid) => boolean;
}

export const equals = function<T extends Setoid>(a: typeof b, b: T) {
  const apply = obj => obj.extended.prototype.equals.apply(b, [a]);

  if (array.is(b)) {
    return apply(array);
  }

  if (boolean.is(b)) {
    return apply(boolean);
  }

  if (date.is(b)) {
    return apply(date);
  }

  if (error.is(b)) {
    return apply(error);
  }

  if (number.is(b)) {
    return apply(number);
  }

  if (regexp.is(b)) {
    return apply(regexp);
  }

  if (string.is(b)) {
    return apply(string);
  }

  return b.equals(a);
};
