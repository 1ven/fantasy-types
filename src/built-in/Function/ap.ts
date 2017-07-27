import { curry } from "../../methods";

export default curry(
  <T, T1, T2>(f: (x: T) => (y: T1) => T2, func: Function) => (x: T) =>
    f(x)(func(x))
);
