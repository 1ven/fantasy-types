import { PlainObject } from "./";
import * as F from "../../types";

export default function lte<T>(other: PlainObject<T>) {
  let thisKeys = Object.keys(this).sort();
  let otherKeys = Object.keys(other).sort();

  while (true) {
    if (thisKeys.length === 0) {
      return true;
    }

    if (otherKeys.length === 0) {
      return false;
    }

    var k = thisKeys.shift();
    var z = otherKeys.shift();

    if (k < z) {
      return true;
    }

    if (k > z) {
      return false;
    }

    if (!F.equals(this[k], other[k])) {
      return F.lte(this[k], other[k]);
    }
  }
}
