import { reduce, concat } from "../../";

export const associativity = (u, f, exp = expect) => {
  exp(reduce(f, "z", u)).toEqual(
    reduce(f, "z", reduce((acc, x) => concat([x], acc), [], u))
  );
};
