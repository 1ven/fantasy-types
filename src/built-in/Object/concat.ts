import { PlainObject } from "./";

export default function<T>(other: PlainObject<T>) {
  let result = {};

  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      result[key] = this[key];
    }
  }

  for (let key in other) {
    if (other.hasOwnProperty(key)) {
      result[key] = other[key];
    }
  }

  return result;
}
