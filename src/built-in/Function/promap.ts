export default <T, T1, T2>(
  f: (x: T) => T1,
  g: (a: T1) => T2,
  func: Function
) => (x: T) => g(func(f(x)));
