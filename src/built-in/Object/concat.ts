import { curry } from "../../methods";
import { PlainObject } from "./";

export default curry(<T>(a: PlainObject<T>, b: PlainObject<T>) => {
  let result = {};

  for (let key in b) {
    result[key] = b[key];
  }

  for (let key in a) {
    result[key] = a[key];
  }

  return result;
});
