export default (f: <T>(x: T) => Function, func: Function) => <T>(y: T) =>
  func(f(y));
