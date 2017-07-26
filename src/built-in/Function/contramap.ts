import * as F from "../../types";

export default function contramap(this: Function, f: <T>(x: T) => Function) {
  return <T>(y: T) => f(this(y))(y);
}
