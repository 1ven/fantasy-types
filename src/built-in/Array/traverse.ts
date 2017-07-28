import {
  Applicative,
  ApplicativeConstructor,
  of,
  map,
  ap,
  concat
} from "../../types";

export default <T, T1>(
  A: ApplicativeConstructor,
  f: (a: T) => Applicative<T1>,
  arr: T[]
) => {
  let acc = of(A, []);

  for (let v of arr) {
    acc = ap(map(v => list => concat(list, [v]), f(v)) as any, acc);
  }

  return acc;
};
