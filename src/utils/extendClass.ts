/**
 * Warning: ES6 only.
 * Used to extend class by given spec object.
 * 
 * @param Origin Original constructor.
 * @param child Spec object.
 */
export default function<T, T1>(Origin, child) {
  /**
   * Hack, for proper displaying class name in console.
   */
  const obj = {
    [Origin.name]: <any>class extends Origin {}
  };
  const Class = obj[Origin.name];

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
