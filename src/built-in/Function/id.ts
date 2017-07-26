import * as F from "../../types";

export default function id() {
  return <T>(x: T) => x;
}
