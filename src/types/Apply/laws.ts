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
