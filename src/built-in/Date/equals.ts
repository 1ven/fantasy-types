import { curry } from "../../methods";
import { equals } from "../../types";

export default curry((a: Date, b: Date) => equals(a.valueOf(), b.valueOf()));
