import { of, map, ap } from "../../types";
import { Applicative, ApplicativeConstructor } from "../../types";

export default function traverse<T, T1>(
  this: Array<T>,
  A: ApplicativeConstructor,
  f: (a: T) => Applicative<T1>
) {
  type A = Applicative<T1>;
  type L = Array<A>;

  const list = map(f, this);
  let acc = of(A, []);
  let idx = list.length - 1;

  while (idx >= 0) {
    acc = ap(map((el: A) => (list: L) => [el, ...list], list[idx]), acc);
    idx -= 1;
  }

  return acc;
}
