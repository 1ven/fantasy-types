import { lte } from "../../types";

export default (a: Date, b: Date) => lte(a.valueOf(), b.valueOf());
