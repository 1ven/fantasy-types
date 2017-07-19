import * as F from "../../types";
import * as Z from "sanctuary-type-classes";
import { extendClass } from "../../utils";

export interface Constructor
  extends F.MonoidConstructor,
    F.ApplicativeConstructor,
    F.ChainRecConstructor,
    F.PlusConstructor {
  new <T>(...values: T[]): ArrayExtended<T>;
}

export interface ArrayExtended<T>
  extends F.Setoid,
    F.Ord,
    F.Semigroup,
    F.Monoid,
    F.Functor<T>,
    F.Apply<T>,
    F.Applicative<T>,
    F.Chain<T>,
    F.ChainRec<T>,
    F.Alt<T>,
    F.Plus<T>,
    F.Foldable<T>,
    F.Traversable<T>,
    F.Extend<T> {}

export const is = <T>(arr: any): arr is Array<T> => arr instanceof Array;
export const isConstructor = (Ctor: any): Ctor is ArrayConstructor =>
  Ctor === Array;

export const extended = {
  empty: function() {
    return new this();
  },
  zero: function() {
    return new this();
  },
  of: function<T1>(value: T1) {
    return new this(value);
  },
  chainRec: <T1, T2, T3>(
    f: (next: (a: T1) => T2, done: (a: T1) => T3, value: T1) => Array<T2 | T3>,
    val: T1
  ) => {
    // TODO: provide implementation
    return Z.chainRec(Array, f, val);
  },
  prototype: {
    concat: function<T, T1>(other: Array<T>) {
      return Array.prototype.concat.call(this, other);
    },
    alt: function<T>(other: Array<T>) {
      return Array.prototype.concat.call(this, other);
    },
    map: function<T, T1, T2>(f: (a: T) => T1) {
      return Array.prototype.map.call(this, (a: T) => f(a));
    },
    reduce: function<T, T1>(f: (acc: T1, val: T) => T1, initial: T1) {
      return Array.prototype.reduce.call(
        this,
        (acc: T1, val: T) => f(acc, val),
        initial
      );
    },
    extend: function<T, T1>(f: (a: Array<T>) => T1) {
      return Array.prototype.map.call(this, (_, i: number) => f(this.slice(i)));
    },
    equals: function<T extends F.Setoid>(other: Array<T>) {
      if (this.length !== other.length) {
        return false;
      }

      if (this === other) {
        return true;
      }

      return Array.prototype.reduce.call(
        this,
        (acc: boolean, value: T, i: number) =>
          Z.equals(value, other[i]) ? acc : false,
        true
      );
    },
    lte: function<T>(other: Array<T>) {
      if (this.length < other.length) {
        return true;
      }

      if (this.length > other.length) {
        return false;
      }

      return Array.prototype.reduce.call(
        this,
        (acc: boolean, value: T, i: number) =>
          Z.lte(other[i], value) ? acc : false,
        true
      );
    },
    ap: function<T, T1>(other: ArrayExtended<(x: T) => T1>) {
      const Ctor = this.constructor;
      return Z.reduce(
        (acc: T1[], val: (x: T) => T1) =>
          new Ctor(
            ...acc,
            ...Z.reduce(
              (acc2: T1[], val2: T) => new Ctor(...acc2, val(val2)),
              new Ctor(),
              this
            )
          ),
        new Ctor(),
        other
      );
    },
    chain: function<T, T1>(f: (a: T) => Array<T1>) {
      return Z.reduce(
        (acc: Array<T1>, val: T) => Z.concat(f(val), acc),
        [],
        this
      );
    },
    traverse: function<T, T1>(
      A: F.ApplicativeConstructor,
      f: (a: T) => F.Applicative<T1>
    ) {
      // TODO: provide implementation
    }
  }
};

const ArrayExtended: Constructor = extendClass(Array, extended);

export default ArrayExtended;
