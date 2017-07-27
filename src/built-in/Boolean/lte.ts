import { lte } from "../../types";

export default function(other: Boolean) {
  return typeof this === "object"
    ? lte(other.valueOf(), this.valueOf())
    : this === false || other === true;
}
