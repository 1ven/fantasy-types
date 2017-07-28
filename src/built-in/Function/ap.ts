export default <T, T1, T2>(f: (x: T) => (y: T1) => T2, func: Function) => (
  x: T
) => f(x)(func(x));
