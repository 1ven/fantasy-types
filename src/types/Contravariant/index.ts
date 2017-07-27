import * as func from "../../built-in/Function";

// the opposite as Functor `.map`
export interface Contravariant<T> {
  contramap: <T1>(fn: (a: T) => T1) => Contravariant<T>;
}

export function contramap<T, T1>(f: (x: T) => T1, a: Function): Function;
export function contramap<T, T1>(
  f: (x: T) => T1,
  a: Contravariant<T>
): Contravariant<T1>;

export function contramap(f, a) {
  const apply1 = obj => obj.methods.contramap(f, a);

  if (func.is(a)) {
    return apply1(func);
  }

  return a.contramap(f);
}
