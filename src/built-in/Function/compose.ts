import * as F from "../../types";

export default function compose(this: Function, other: Function) {
  return <T>(x: T) => other(this(x));
}
