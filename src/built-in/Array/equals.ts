import { curry } from "../../";
import { Setoid, equals } from "../../types";

export default curry(<T extends Setoid>(a: T[], b: T[]) => {
  if (b.length !== a.length) {
    return false;
  }

  if (b === a) {
    return true;
  }

  for (let idx = 0; idx < b.length; idx += 1) {
    if (!equals(a[idx], b[idx])) {
      return false;
    }
  }

  return true;
});
