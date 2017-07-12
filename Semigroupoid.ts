export type Semigroupoid = {
  compose: <T>(a: Semigroupoid) => T;
}