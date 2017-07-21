import { PlainObject } from "./";
import { of, map, ap } from "../../types";
import { Applicative, ApplicativeConstructor } from "../../types";

export default function traverse<T, T1>(
  this: PlainObject<T>,
  A: ApplicativeConstructor,
  f: (a: T) => Applicative<T1>
) {
  const initial = new (this.constructor as ObjectConstructor)({});

  return Object.keys(this).reduce((a: Applicative<T1>, key: string) => {
    return ap(
      map(
        o => v => {
          // Mutation
          o[key] = v;
          return 0;
        },
        a
      ),
      f(this[key])
    );
  }, of(A, initial));
}
