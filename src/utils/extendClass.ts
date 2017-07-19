// Warning: ES6 only
export default function<T, T1>(Origin, child) {
  const Class = <any>class extends Origin {};

  for (let key in child) {
    if (key === "prototype") {
      const proto = child.prototype;
      for (let key1 in proto) {
        Class.prototype[key1] = proto[key1];
      }
    } else {
      Class[key] = child[key];
    }
  }

  return Class;
}
