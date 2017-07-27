export default function<T, T1>(other: Array<T>) {
  return Array.prototype.concat.call(this, other);
}
