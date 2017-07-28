import { Ord, lte, equals } from "../../types";
import { PlainObject } from "./";

export default <T extends Ord>(a: PlainObject<T>, b: PlainObject<T>) => {
  let aKeys = Object.keys(a).sort();
  let bKeys = Object.keys(b).sort();

  while (true) {
    if (bKeys.length === 0) {
      return true;
    }

    if (aKeys.length === 0) {
      return false;
    }

    var k = bKeys.shift();
    var z = aKeys.shift();

    if (k < z) {
      return true;
    }

    if (k > z) {
      return false;
    }

    if (!equals(a[k], b[k])) {
      return lte(a[k], b[k]);
    }
  }
};
