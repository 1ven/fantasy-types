import { Functor } from "../Functor";

export interface Alt<T> extends Functor<T> {
  alt: <T1>(a: Alt<T1>) => Alt<T | T1>;
}
