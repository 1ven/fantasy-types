import { Alt } from "./";

export const associativity = <T>(a: Alt<T>, b: Alt<T>, c: Alt<T>) => {
  expect(a.alt(b).alt(c)).toEqual(a.alt(b.alt(c)));
};

export const distributivity = <T>(a: Alt<T>, b: Alt<T>, f) => {
  expect(a.alt(b).map(f)).toEqual((a.map(f) as any).alt(b.map(f)));
};
