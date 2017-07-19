import { Semigroupoid } from "../Semigroupoid";

export interface Category extends Semigroupoid {}

export interface CategoryConstructor {
  id: () => Category;
}
