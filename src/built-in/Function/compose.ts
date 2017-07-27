import { curry } from "../../methods";

export default curry((a: Function, b: Function) => <T>(x: T) => a(b(x)));
