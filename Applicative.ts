import { Apply } from "./Apply";

export interface Applicative<T> extends Apply<T> {
  new (a: T): Applicative<T>;
  of: <T1>(a: T1) => Applicative<T1>;
}
