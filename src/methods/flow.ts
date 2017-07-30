import { reduce } from "../types";

export type Arity1<U0, T0> = (x0: U0) => T0;
export type Arity2<U0, U1, T0> = (x0: U0, x1: U1) => T0;
export type Arity3<U0, U1, U2, T0> = (x0: U0, x1: U1, x2: U2) => T0;

// prettier-ignore
export type FlowFunction = {
  <U0, T0>(f0: Arity1<U0, T0>): Arity1<U0, T0>;
  <U0, U1, T0>(f0: Arity2<U0, U1, T0>): Arity2<U0, U1, T0>;
  <U0, U1, U2, T0>(f0: Arity3<U0, U1, U2, T0>): Arity3<U0, U1, U2, T0>;

  <U0, T0, T1>(f1: Arity1<T0, T1>, f0: Arity1<U0, T0>): Arity1<U0, T1>;
  <U0, U1, T0, T1>(f1: Arity1<T0, T1>, f0: Arity2<U0, U1, T0>): Arity2<U0, U1, T1>;
  <U0, U1, U2, T0, T1>(f1: Arity1<T0, T1>, f0: Arity3<U0, U1, U2, T0>): Arity3<U0, U1, U2, T1>;

  <U0, T0, T1, T2>(f2: Arity1<T1, T2>, f1: Arity1<T0, T1>, f0: Arity1<U0, T0>): Arity1<U0, T2>;
  <U0, U1, T0, T1, T2>(f2: Arity1<T1, T2>, f1: Arity1<T0, T1>, f0: Arity2<U0, U1, T0>): Arity2<U0, U1, T2>;
  <U0, U1, U2, T0, T1, T2>(f2: Arity1<T1, T2>, f1: Arity1<T0, T1>, f0: Arity3<U0, U1, U2, T0>): Arity3<U0, U1, U2, T2>;

  <U0, T0, T1, T2, T3>(f3: Arity1<T2, T3>, f2: Arity1<T1, T2>, f1: Arity1<T0, T1>, f0: Arity1<U0, T0>): Arity1<U0, T3>;
  <U0, U1, T0, T1, T2, T3>(f3: Arity1<T2, T3>, f2: Arity1<T1, T2>, f1: Arity1<T0, T1>, f0: Arity2<U0, U1, T0>): Arity2<U0, U1, T3>;
  <U0, U1, U2, T0, T1, T2, T3>(f3: Arity1<T2, T3>, f2: Arity1<T1, T2>, f1: Arity1<T0, T1>, f0: Arity3<U0, U1, U2, T0>): Arity3<U0, U1, U2, T3>;

  <U0, T0, T1, T2, T3, T4>(f4: Arity1<T3, T4>, f3: Arity1<T2, T3>, f2: Arity1<T1, T2>, f1: Arity1<T0, T1>, f0: Arity1<U0, T0>): Arity1<U0, T4>;
  <U0, U1, T0, T1, T2, T3, T4>(f4: Arity1<T3, T4>, f3: Arity1<T2, T3>, f2: Arity1<T1, T2>, f1: Arity1<T0, T1>, f0: Arity2<U0, U1, T0>): Arity2<U0, U1, T4>;
  <U0, U1, U2, T0, T1, T2, T3, T4>(f4: Arity1<T3, T4>, f3: Arity1<T2, T3>, f2: Arity1<T1, T2>, f1: Arity1<T0, T1>, f0: Arity3<U0, U1, U2, T0>): Arity3<U0, U1, U2, T4>;
}

/**
 * Composes given functions from right to left to a single function.
 * Returned function accepts multiple arguments, which will be passed to a first function.
 * 
 * @param fns Composing functions.
 */
export default <FlowFunction>function(...fns: Function[]) {
  return (...args) =>
    reduce(
      (arg, fn) => fn(arg),
      fns[fns.length - 1](...args),
      fns.slice(0, fns.length - 1).reverse()
    );
};
