export default (f: <T>(x: T) => Function, func: Function) => <T>(y: T) =>
  f(func(y))(y);
