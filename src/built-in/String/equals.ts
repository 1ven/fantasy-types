import * as Z from "sanctuary-type-classes";

export default function equals(other: String) {
  return typeof this === "object"
    ? Z.equals(this.valueOf(), other.valueOf())
    : this === other;
}
