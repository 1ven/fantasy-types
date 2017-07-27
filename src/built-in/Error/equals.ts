import { equals } from "../../types";

export default function(other: Error) {
  return equals(other.name, this.name) && equals(other.message, this.message);
}
