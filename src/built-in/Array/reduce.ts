import { curry } from "../../methods";

export default curry(
  <T, T1>(f: (acc: T1, val: T) => T1, initial: T1, arr: T[]) =>
    Array.prototype.reduce.call(
      arr,
      (acc: T1, val: T) => f(acc, val),
      initial
    ) as T1
);
