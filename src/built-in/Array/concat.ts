import { curry } from "../../";

export default curry(<T>(a: T[], b: T[]) =>
  Array.prototype.concat.apply(b, [a])
);
