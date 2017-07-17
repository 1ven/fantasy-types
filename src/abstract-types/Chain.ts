import { Apply } from "./Apply";

export interface Chain<T> extends Apply<T> {
  chain: <T1>(f: (a: T) => Chain<T1>) => Chain<T1>;
}
