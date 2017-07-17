export interface Semigroupoid {
  compose: (a: Semigroupoid) => Semigroupoid;
}
