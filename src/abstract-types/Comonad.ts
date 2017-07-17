import { Extend } from "./Extend";

export interface Comonad<T> extends Extend<T> {
  extract: () => T;
}
