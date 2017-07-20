export default function reduce<T, T1>(f: (acc: T1, val: T) => T1, initial: T1) {
  return Array.prototype.reduce.call(
    this,
    (acc: T1, val: T) => f(acc, val),
    initial
  );
}
