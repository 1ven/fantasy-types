export default (a: Function, b: Function) => <T>(x: T) => a(b(x));
