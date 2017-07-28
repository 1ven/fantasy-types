export default <T, T1>(fs: (x: T) => T1[], arr: T[]) => {
  let result = [];

  for (let idx = 0; idx < fs.length; idx += 1) {
    for (let idx2 = 0; idx2 < arr.length; idx2 += 1) {
      result.push(fs[idx](arr[idx2]));
    }
  }

  return result;
};
