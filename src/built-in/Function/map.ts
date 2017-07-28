export default <T, T1>(f: (a: T) => T1, func: Function) => <T>(x: T) =>
  f(func(x));
