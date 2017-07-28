export default <T, T1>(f: (a: T) => T1, arr: T[]) =>
  Array.prototype.map.call(arr, (a: T) => f(a)) as T1[];
