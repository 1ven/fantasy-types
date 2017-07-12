import { Apply } from './Apply';

export type Applicative<T> = Apply<T> & {
  constructor: {
    of: <T1>(a: T1) => Applicative<T1>
  }
}