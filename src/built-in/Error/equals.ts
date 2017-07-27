import { curry } from "../../methods";
import { equals } from "../../types";

export default curry(
  (a: Error, b: Error) => equals(a.name, b.name) && equals(a.message, b.message)
);
