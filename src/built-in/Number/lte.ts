import { curry } from "../../methods";

export default curry(
  (a: number, b: number) => (isNaN(b) && isNaN(a)) || b <= a
);
