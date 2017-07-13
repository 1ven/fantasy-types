import { Alt } from "./Alt";

export interface Plus<T> {}

export interface PlusConstructor {
  zero: () => Plus<never>;
}
