import * as F from "../../types";

export default function promap<T, T1, T2>(
  this: Function,
  f: (x: T) => T1,
  g: (a: T1) => T2
) {
  return (x: T) => g(this(f(x)));
}
