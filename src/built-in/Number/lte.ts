import * as Z from "sanctuary-type-classes";

export default function lte(other: Number) {
  return typeof this === "object"
    ? Z.lte(this.valueOf(), other.valueOf())
    : (isNaN(this) && isNaN(other as number)) || this <= other;
}
