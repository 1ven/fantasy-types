export default function map<T, T1, T2>(f: (a: T) => T1) {
  return Array.prototype.map.call(this, (a: T) => f(a));
}
