export default function<T, T1, T2>(this: Function, f: (x: T) => (y: T1) => T2) {
  return (x: T) => f(x)(this(x));
}
