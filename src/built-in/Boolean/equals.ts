import { curry } from "../../methods";

export default curry((a: boolean, b: boolean) => {
  return a === b;
});
