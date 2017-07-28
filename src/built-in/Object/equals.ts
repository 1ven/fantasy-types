import { Setoid, equals } from "../../types";
import { PlainObject } from "./";

export default <T extends Setoid>(a: PlainObject<T>, b: PlainObject<T>) => {
  if (b === a) {
    return true;
  }

  const aKeys = Object.keys(a).sort();
  const bKeys = Object.keys(b).sort();

  return equals(aKeys, bKeys) && bKeys.every((k: string) => equals(a[k], b[k]));
};
