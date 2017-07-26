import * as func from "../../built-in/Function";

export interface Semigroupoid {
  compose: (a: Semigroupoid) => Semigroupoid;
}

export function compose(a: typeof b, b: Function): Function;
export function compose<T extends Semigroupoid>(
  a: typeof b,
  b: T
): Semigroupoid;

export function compose(a, b) {
  const apply = obj => obj.extended.prototype.compose.apply(b, [a]);

  if (func.is(b)) {
    return apply(func);
  }

  return b.compose(a);
}
