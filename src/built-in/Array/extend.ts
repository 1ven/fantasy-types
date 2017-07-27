import { curry } from "../../methods";

export default curry(<T, T1>(f: (a: T[]) => T1, arr: T[]) => {
  return Array.prototype.map.call(arr, (_, i: number) => f(arr.slice(i)));
});
