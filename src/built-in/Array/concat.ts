export default function concat<T, T1>(other: Array<T>) {
  return Array.prototype.concat.call(this, other);
}
