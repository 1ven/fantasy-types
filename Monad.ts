import { Applicative } from './Applicative';
import { Chain } from './Chain';

export type Monad<T> = Applicative<T> & Chain<T>;