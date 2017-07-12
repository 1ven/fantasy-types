export type Setoid = {
  // TODO: how to reflect, that `a` should be Setoid of the same type?
  equals: (a: Setoid) => boolean;
};
