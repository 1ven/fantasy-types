import { Setoid, equals } from "../../types";
import { PlainObject } from "./";

export default function<T extends Setoid>(
  this: PlainObject<T>,
  other: PlainObject<T>
) {
  if (this === other) {
    return true;
  }

  const thisKeys = Object.keys(this).sort();
  const otherKeys = Object.keys(other).sort();

  return (
    equals(otherKeys, thisKeys) &&
    thisKeys.every((k: string) => equals(other[k], this[k]))
  );
}
