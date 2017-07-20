export default function chain<T, T1>(f: (a: T) => Array<T1>) {
  let result = new this.constructor();

  for (let v of this) {
    Array.prototype.push.apply(result, f(v));
  }

  return result;
}
