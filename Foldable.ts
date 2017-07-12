export type Foldable<T> = {
  reduce: <T1>(fn: (acc: T1, value: T) => T1, initial: T1) => Foldable<T1>;
}