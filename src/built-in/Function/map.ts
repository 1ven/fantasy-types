import * as F from "../../types";

export default function map<T, T1>(this: Function, f: (a: T) => T1) {
  return <T>(x: T) => f(this(x));
}
