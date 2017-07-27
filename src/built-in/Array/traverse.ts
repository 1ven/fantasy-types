import { curry } from "../../";
import { Applicative, ApplicativeConstructor, of, map, ap } from "../../types";

export default curry(
  <T, T1>(
    A: ApplicativeConstructor,
    f: (a: T) => Applicative<T1>,
    arr: T[]
  ) => {
    type A = Applicative<T1>;
    type L = Array<A>;

    const list = map(f, arr);
    let acc = of(A, []);
    let idx = list.length - 1;

    while (idx >= 0) {
      acc = ap(map((el: A) => (list: L) => [el, ...list], list[idx]), acc);
      idx -= 1;
    }

    return acc;
  }
);
