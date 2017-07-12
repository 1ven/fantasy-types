// the opposite as Functor `.map`
export type Contravariant<T> = {
  contramap: <T1>(fn: (a: T) => T1) => Contravariant<T>;
};
