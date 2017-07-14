import { Alt } from "./Alt";

export interface Plus<T> extends Alt<T> {}

export interface PlusConstructor {
  zero: () => Plus<never>;
}
