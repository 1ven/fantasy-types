import { Apply } from "../Apply";

export interface Applicative<T> extends Apply<T> {}

export interface ApplicativeConstructor {
  // new <T1>(a: T1): Applicative<T1>;
  of: <T1>(a: T1) => Applicative<T1>;
}
