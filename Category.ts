import { Semigroupoid } from "./Semigroupoid";

export interface Category extends Semigroupoid {
  new (): Category;
  id: () => Category;
}
