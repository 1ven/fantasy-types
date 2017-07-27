import { curry } from "../../methods";
import { PlainObject } from "./";

export default curry(
  <T, T1>(f: (acc: T1, val: T) => T1, initial: T1, obj: PlainObject<T>) =>
    Object.keys(obj)
      .sort()
      .reduce((acc: T1, key: string) => f(acc, obj[key]), initial)
);
