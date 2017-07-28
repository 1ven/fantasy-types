import { PlainObject } from "./";

export default <T, T1, T2>(f: (a: T) => T1, obj: PlainObject<T>) => {
  let result = {};

  for (let key in obj) {
    result[key] = f(obj[key]);
  }

  return result;
};
