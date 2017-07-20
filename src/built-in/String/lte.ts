import * as Z from "sanctuary-type-classes";

export default function lte(other: String) {
  return typeof this === "object"
    ? Z.lte(this.valueOf(), other.valueOf())
    : this <= other;
}
