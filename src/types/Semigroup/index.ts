export interface Semigroup {
  concat: (a: Semigroup) => Semigroup;
  // concat: <T extends Semigroup>(a: T) => typeof a;
}
