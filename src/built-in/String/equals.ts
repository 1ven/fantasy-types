import { equals } from "../../types";

export default function(other: String) {
  return typeof this === "object"
    ? equals(other.valueOf(), this.valueOf())
    : this === other;
}
