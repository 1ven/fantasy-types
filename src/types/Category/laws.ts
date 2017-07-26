import { Category, CategoryConstructor } from "./";

export const rightIdentity = (C: CategoryConstructor, a: Category) => {
  expect(a.compose(C.id())).toEqual(a);
};

export const leftIdentity = (C: CategoryConstructor, a: Category) => {
  expect(C.id().compose(a)).toEqual(a);
};
