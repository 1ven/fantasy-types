import * as F from "../../";
import { Apply } from "./";

export const composition = <T>(
  v: Apply<T>,
  u: Apply<(x: T) => T>,
  a: Apply<(x: T) => T>
) => {
  expect(v.ap(u.ap(a.map(f => g => x => f(g(x))) as any))).toEqual(
    v.ap(u).ap(a)
  );
};

export const composition1 = (v, u, a, exp = expect) => {
  exp(F.ap(F.ap(F.map((f: any) => g => x => f(g(x)), a), u), v)).toEqual(
    F.ap(a, F.ap(u, v))
  );
};
