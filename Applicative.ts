import { Apply } from './Apply';

export type Applicative<T> = Apply<T> & {
  constructor: ApplicativeStatic;
}

export type ApplicativeStatic = {
  of: <T1>(a: T1) => Applicative<T1>;
}