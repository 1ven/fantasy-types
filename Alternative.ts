import { Applicative } from "./Applicative";
import { Plus } from "./Plus";

export type Alternative<T> = Applicative<T> & Plus<T>;
