export default function alt<T>(other: Array<T>) {
  return Array.prototype.concat.call(this, other);
}
