export * from "./Alt";
export * from "./Alternative";
export * from "./Applicative";
export * from "./Apply";
export * from "./Bifunctor";
export * from "./Category";
export * from "./Chain";
export * from "./ChainRec";
export * from "./Comonad";
export * from "./Contravariant";
export * from "./Extend";
export * from "./Foldable";
export * from "./Functor";
export * from "./Monad";
export * from "./Monoid";
export * from "./Ord";
export * from "./Plus";
export * from "./Profunctor";
export * from "./Semigroup";
export * from "./Semigroupoid";
export * from "./Setoid";
export * from "./Traversable";

import * as Alt from "./Alt/laws";
import * as Alternative from "./Alternative/laws";
import * as Applicative from "./Applicative/laws";
import * as Apply from "./Apply/laws";
import * as Category from "./Category/laws";
import * as Chain from "./Chain/laws";
import * as ChainRec from "./ChainRec/laws";
import * as Contravariant from "./Contravariant/laws";
import * as Extend from "./Extend/laws";
import * as Foldable from "./Foldable/laws";
import * as Functor from "./Functor/laws";
import * as Monad from "./Monad/laws";
import * as Monoid from "./Monoid/laws";
import * as Ord from "./Ord/laws";
import * as Plus from "./Plus/laws";
import * as Profunctor from "./Profunctor/laws";
import * as Semigroup from "./Semigroup/laws";
import * as Semigroupoid from "./Semigroupoid/laws";
import * as Setoid from "./Setoid/laws";
import * as Traversable from "./Traversable/laws";

export const laws = {
  Alt,
  Alternative,
  Applicative,
  Apply,
  Category,
  Chain,
  ChainRec,
  Contravariant,
  Extend,
  Foldable,
  Functor,
  Monad,
  Monoid,
  Ord,
  Plus,
  Profunctor,
  Semigroup,
  Semigroupoid,
  Setoid,
  Traversable
};
