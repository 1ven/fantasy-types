export type Semigroupoid = {
  compose: (a: Semigroupoid) => Semigroupoid;
}