import { curry } from "../../methods";

export default curry((a: boolean, b: boolean) => b === false || a === true);
