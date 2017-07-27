import { Setoid, equals } from "../../types";

export default function<T extends Setoid>(other: Array<T>) {
  if (this.length !== other.length) {
    return false;
  }

  if (this === other) {
    return true;
  }

  for (let idx = 0; idx < this.length; idx += 1) {
    if (!equals(other[idx], this[idx])) {
      return false;
    }
  }

  return true;
}
