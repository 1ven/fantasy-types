export default <T, T1>(f: (a: T) => T1[], arr: T[]) => {
  let result = [];

  for (let v of arr) {
    Array.prototype.push.apply(result, f(v));
  }

  return result;
};
