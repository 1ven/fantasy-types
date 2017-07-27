import { equals } from "../../types";

export default function(other: Number) {
  return typeof this === "object"
    ? equals(other.valueOf(), this.valueOf())
    : (isNaN(this) && isNaN(other as number)) || this === other;
}
