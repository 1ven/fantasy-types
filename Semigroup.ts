export type Semigroup = {
  concat: (a: Semigroup) => Semigroup;
}