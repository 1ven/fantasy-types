import { PlainObject } from "./";
import concat from "./concat";

export default function alt<T>(other: PlainObject<T>) {
  return concat.apply(this, [other]);
}
