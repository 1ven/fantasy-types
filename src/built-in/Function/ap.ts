import * as types from "../../types";

export default function ap<T, T1, T2>(
  this: Function,
  f: (x: T) => (y: T1) => T2
) {
  return (x: T) => f(x)(this(x));
}
