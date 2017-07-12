import { Apply } from "./Apply";

export type Chain<T> = Apply<T> & {
  chain: <T1>(f: (a: T) => Chain<T1>) => Chain<T1>;
};
