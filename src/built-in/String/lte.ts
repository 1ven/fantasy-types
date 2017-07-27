import { lte } from "../../types";

export default function(other: String) {
  return typeof this === "object"
    ? lte(other.valueOf(), this.valueOf())
    : this <= other;
}
