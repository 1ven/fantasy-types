import { Functor } from "./Functor";

export type Extend<T> = Functor<T> & {
  extend: (f: (a: T) => T) => Extend<T>;
};
