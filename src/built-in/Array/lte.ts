import { curry } from "../../methods";
import { Ord, lte, equals } from "../../types";

export default curry(<T extends Ord>(a: T[], b: T[]) => {
  let idx = 0;
  while (true) {
    if (idx === b.length) {
      return true;
    }

    if (idx === a.length) {
      return false;
    }

    if (!equals(a[idx], b[idx])) {
      return lte(a[idx], b[idx]);
    }

    idx += 1;
  }
});
