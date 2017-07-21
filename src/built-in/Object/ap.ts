import { PlainObject } from "./";

export default function ap<T, T1>(fns: PlainObject<(x: T) => T1>) {
  let result = new this.constructor({});

  for (let key in this) {
    if (key in fns && this.hasOwnProperty(key)) {
      result[key] = fns[key](this[key]);
    }
  }

  return result;
}
