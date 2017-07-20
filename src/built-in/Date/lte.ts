import * as Z from "sanctuary-type-classes";

export default function lte(other: Date) {
  return Z.lte(this.valueOf(), other.valueOf());
}
