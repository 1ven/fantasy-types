import * as Z from "sanctuary-type-classes";
import { Setoid } from "../../types";

export default function equals<T extends Setoid>(other: Array<T>) {
  if (this.length !== other.length) {
    return false;
  }

  if (this === other) {
    return true;
  }

  for (let idx = 0; idx < this.length; idx += 1) {
    if (!Z.equals(this[idx], other[idx])) {
      return false;
    }
  }

  return true;
}
