import { PlainObject } from "./";

export default function map<T, T1, T2>(this: PlainObject<T>, f: (a: T) => T1) {
  let result = new (this.constructor as ObjectConstructor)({});

  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      result[key] = f(this[key]);
    }
  }

  return result;
}
