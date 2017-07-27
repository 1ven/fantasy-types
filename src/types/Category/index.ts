import * as func from "../../built-in/Function";
import { Semigroupoid } from "../Semigroupoid";

export interface Category extends Semigroupoid {}

export interface CategoryConstructor {
  id: () => Category;
}

export function id(A: FunctionConstructor): Function;
export function id(A: CategoryConstructor): Category;

export function id(A) {
  const apply1 = obj => obj.methods.id();

  if (func.isConstructor(A)) {
    return apply1(func);
  }

  return A.id();
}
