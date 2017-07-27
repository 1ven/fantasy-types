import { curry } from "../../methods";

export default curry(<T>(a: T[], b: T[]) =>
  Array.prototype.concat.apply(b, [a])
);
