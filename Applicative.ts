import { Apply } from "./Apply";

export interface Applicative<T> extends Apply<T> {}

export interface ApplicativeConstructor {
  of: <T1>(a: T1) => Applicative<T1>;
}
