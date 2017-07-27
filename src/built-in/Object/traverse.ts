import { curry } from "../../methods";
import {
  Applicative,
  ApplicativeConstructor,
  of,
  map,
  ap,
  concat
} from "../../types";
import { PlainObject } from "./";

export default curry(
  <T, T1>(
    A: ApplicativeConstructor,
    f: (a: T) => Applicative<T1>,
    obj: PlainObject<T>
  ) => {
    let acc = A.of({});

    for (let key in obj) {
      acc = ap(
        map(v => list => concat(list, { [key]: v }), f(obj[key])) as any,
        acc
      );
    }

    return acc;
  }
);
