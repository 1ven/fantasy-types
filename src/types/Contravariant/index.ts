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
  const apply = obj => obj.extended.prototype.contramap.apply(a, [f]);

  if (func.is(a)) {
    return apply(func);
  }

  return a.contramap(f);
}
