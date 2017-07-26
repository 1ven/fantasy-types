import { compose, id } from "../../";

export const rightIdentity = (C, a, exp = expect) => {
  exp(compose(id(C), a)).toEqual(a);
};

export const leftIdentity = (C, a, exp = expect) => {
  exp(compose(a, id(C))).toEqual(a);
};
