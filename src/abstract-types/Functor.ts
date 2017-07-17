export interface Functor<T> {
  map: <T1>(fn: (a: T) => T1) => Functor<T1>;
}
