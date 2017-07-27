import { lte } from "../../types";

export default function(other: Date) {
  return lte(other.valueOf(), this.valueOf());
}
