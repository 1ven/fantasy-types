import * as array from "../../built-in/Array";

import { Functor } from "../Functor";

export interface Alt<T> extends Functor<T> {
  alt: <T1>(a: Alt<T1>) => Alt<T | T1>;
}

export const alt = function<T, T1 extends Alt<T>>(a: typeof b, b: T1) {
  const apply = obj => obj.extended.prototype.alt.apply(b, [a]);

  if (array.is(b)) {
    return apply(array);
  }

  return b.alt(a);
};
