import { Alt } from "./Alt";

export interface Plus<T> {
  new (a: T): Plus<T>;
  zero: () => Plus<never>;
}
