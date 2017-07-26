import * as F from "../../types";

export default function of<T>(val: T) {
  return () => val;
}
