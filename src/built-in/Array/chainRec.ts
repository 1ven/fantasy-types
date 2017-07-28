export default <T1, T2, T3>(
  f: (
    next: (a: T1) => { value: T2; done: boolean },
    done: (a: T1) => { value: T3; done: boolean },
    i: T1
  ) => (T2 | T3)[],
  i: T1
) => {
  function stepNext(x) {
    return { value: x, done: false };
  }
  function stepDone(x) {
    return { value: x, done: true };
  }

  let todo = [i];
  let res = [];
  let xs;

  while (todo.length > 0) {
    xs = f(stepNext, stepDone, todo.shift());
    let buffer = [];
    for (let idx = 0; idx < xs.length; idx += 1) {
      (xs[idx].done ? res : buffer).push(xs[idx].value);
    }
    Array.prototype.unshift.apply(todo, buffer);
  }

  return res;
};
