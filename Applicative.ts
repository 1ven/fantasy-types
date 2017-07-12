import { Apply } from "./Apply";

export type Applicative<T> = Apply<T> & {
  constructor: ApplicativeConstructor;
};

export type ApplicativeConstructor = {
  of: <T1>(a: T1) => Applicative<T1>;
};
