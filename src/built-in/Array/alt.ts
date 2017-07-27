export default function<T>(other: Array<T>) {
  return Array.prototype.concat.call(this, other);
}
