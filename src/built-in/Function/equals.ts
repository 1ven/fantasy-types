import { curry } from "../../methods";

export default curry((a: Function, b: Function) => b === a);
