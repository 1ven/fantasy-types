import { equals } from "../../types";

export default (a: Error, b: Error) =>
  equals(a.name, b.name) && equals(a.message, b.message);
