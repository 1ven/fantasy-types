import * as Z from "sanctuary-type-classes";

export default function equals(other: Date) {
  return Z.equals(this.valueOf(), other.valueOf());
}
