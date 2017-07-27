import { equals } from "../../types";

export default function(other: Date) {
  return equals(other.valueOf(), this.valueOf());
}
