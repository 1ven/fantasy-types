import { Functor } from "../Functor";

export interface Extend<T> extends Functor<T> {
  extend: <T1>(f: (a: Extend<T>) => T1) => Extend<T1>;
}
