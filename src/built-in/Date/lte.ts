import { curry } from "../../methods";
import { lte } from "../../types";

export default curry((a: Date, b: Date) => lte(a.valueOf(), b.valueOf()));
