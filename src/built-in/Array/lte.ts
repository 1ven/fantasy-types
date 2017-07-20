import * as Z from "sanctuary-type-classes";

export default function lte<T>(other: Array<T>) {
  let idx = 0;
  while (true) {
    if (idx === this.length) {
      return true;
    }

    if (idx === other.length) {
      return false;
    }

    if (!Z.equals(this[idx], other[idx])) {
      return Z.lte(this[idx], other[idx]);
    }

    idx += 1;
  }
}
