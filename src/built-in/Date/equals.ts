import { equals } from "../../types";

export default (a: Date, b: Date) => equals(a.valueOf(), b.valueOf());
