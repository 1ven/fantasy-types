import * as Z from "sanctuary-type-classes";

export default function lte(other: Boolean) {
  return typeof this === "object"
    ? Z.lte(this.valueOf(), other.valueOf())
    : this === false || other === true;
}
