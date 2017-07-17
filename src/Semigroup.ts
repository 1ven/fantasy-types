export interface Semigroup {
  concat: (a: Semigroup) => Semigroup;
}
