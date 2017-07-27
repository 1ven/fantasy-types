import { equals } from "../../types";

export default function(other: Boolean) {
  return typeof this === "object"
    ? equals(other.valueOf(), this.valueOf())
    : other === this;
}
