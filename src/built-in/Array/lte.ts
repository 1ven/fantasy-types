import { lte, equals } from "../../types";

export default function<T>(other: Array<T>) {
  let idx = 0;
  while (true) {
    if (idx === this.length) {
      return true;
    }

    if (idx === other.length) {
      return false;
    }

    if (!equals(other[idx], this[idx])) {
      return lte(other[idx], this[idx]);
    }

    idx += 1;
  }
}
