import { Semigroupoid } from './Semigroupoid';

export type Category = Semigroupoid & {
  constructor: AlternativeConstructor;
}

export type AlternativeConstructor = {
  id: () => Category;
}