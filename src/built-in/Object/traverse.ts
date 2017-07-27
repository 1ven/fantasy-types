import { PlainObject } from "./";
import { of, map, ap, concat } from "../../types";
import { Applicative, ApplicativeConstructor } from "../../types";

export default function traverse<T, T1>(
  this: PlainObject<T>,
  A: ApplicativeConstructor,
  f: (a: T) => Applicative<T1>
) {
  let acc = A.of({});

  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      acc = ap(
        map(v => list => concat(list, { [key]: v }), f(this[key])) as any,
        acc
      );
    }
  }

  return acc;
}
