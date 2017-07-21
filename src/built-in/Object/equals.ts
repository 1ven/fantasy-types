import * as F from "../../types";
import { PlainObject } from "./";

export default function equals<T extends F.Setoid>(
  this: PlainObject<T>,
  other: PlainObject<T>
) {
  if (this === other) {
    return true;
  }

  const thisKeys = Object.keys(this).sort();
  const otherKeys = Object.keys(other).sort();

  return (
    F.equals(thisKeys, otherKeys) &&
    thisKeys.every((k: string) => F.equals(this[k], other[k]))
  );
}
