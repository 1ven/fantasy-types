import * as Z from "sanctuary-type-classes";

export default function equals(other: Number) {
  return typeof this === "object"
    ? Z.equals(this.valueOf(), other.valueOf())
    : (isNaN(this) && isNaN(other as number)) || this === other;
}
