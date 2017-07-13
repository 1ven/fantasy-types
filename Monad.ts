import { Applicative } from "./Applicative";
import { Chain } from "./Chain";

export interface Monad<T> extends Applicative<T>, Chain<T> {}
