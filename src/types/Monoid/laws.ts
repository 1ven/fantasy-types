import { Monoid, MonoidConstructor } from "./";

export const rightIdentity = (M: MonoidConstructor, m: Monoid) => {
  expect(m.concat(M.empty())).toEqual(m);
};

export const leftIdentity = (M: MonoidConstructor, m: Monoid) => {
  expect(M.empty().concat(m)).toEqual(m);
};
