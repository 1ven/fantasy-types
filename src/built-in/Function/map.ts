import { curry } from "../../methods";

export default curry(<T, T1>(f: (a: T) => T1, func: Function) => <T>(x: T) =>
  f(func(x))
);
