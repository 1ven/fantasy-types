export default function<T, T1>(fs: Array<(x: T) => T1>) {
  let result = [];

  for (let idx = 0; idx < fs.length; idx += 1) {
    for (let idx2 = 0; idx2 < this.length; idx2 += 1) {
      result.push(fs[idx](this[idx2]));
    }
  }

  return result;
}
