// the opposite as Functor `.map`
export interface Contravariant<T> {
  contramap: <T1>(fn: (a: T) => T1) => Contravariant<T>;
}
