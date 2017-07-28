import * as func from "../../built-in/Function";
import { Semigroupoid } from "../Semigroupoid";

export interface Category extends Semigroupoid {}

export interface CategoryConstructor {
  id: () => Category;
}

export type IdFunction = {
  (A: FunctionConstructor): Function;
  (A: CategoryConstructor): Category;
};

export const id: IdFunction = A => {
  const apply = obj => obj.methods.id();

  if (func.isConstructor(A)) {
    return apply(func);
  }

  return A.id();
};
