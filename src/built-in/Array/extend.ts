export default function<T, T1>(f: (a: Array<T>) => T1) {
  return Array.prototype.map.call(this, (_, i: number) => f(this.slice(i)));
}
