import { lte } from "../../types";

export default function(other: Number) {
  return typeof this === "object"
    ? lte(other.valueOf(), this.valueOf())
    : (isNaN(this) && isNaN(other as number)) || this <= other;
}
