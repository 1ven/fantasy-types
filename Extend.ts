import { Functor } from "./Functor";

export interface Extend<T> extends Functor<T> {
  extend: (f: (a: T) => T) => Extend<T>;
}
