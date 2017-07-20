import * as Z from "sanctuary-type-classes";

export default function equals(other: Error) {
  return (
    Z.equals(this.name, other.name) && Z.equals(this.message, other.message)
  );
}
