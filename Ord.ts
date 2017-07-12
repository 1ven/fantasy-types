import { Setoid } from "./Setoid";

export type Ord = Setoid & {
  lte: (a: Ord) => boolean;
};
