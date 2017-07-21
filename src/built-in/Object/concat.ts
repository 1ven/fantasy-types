import { PlainObject } from "./";

export default function concat<T>(other: PlainObject<T>) {
  let result = new this.constructor({});

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
