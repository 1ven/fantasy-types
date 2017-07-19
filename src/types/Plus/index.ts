import { Alt } from "../Alt";

export interface Plus<T> extends Alt<T> {}

export interface PlusConstructor {
  // new (): Plus<void>;
  zero: () => Plus<void>;
}
