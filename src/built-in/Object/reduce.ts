import { PlainObject } from "./";

export default function reduce<T, T1>(
  this: PlainObject<T>,
  f: (acc: T1, val: T) => T1,
  initial: T1
) {
  return Object.keys(this)
    .sort()
    .reduce((acc: T1, key: string) => f(acc, this[key]), initial);
}
