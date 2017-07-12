import { Semigroupoid } from './Semigroupoid';

export type Category = Semigroupoid & {
  constructor: AlternativeStatic;
}

export type AlternativeStatic = {
  id: () => Category;
}