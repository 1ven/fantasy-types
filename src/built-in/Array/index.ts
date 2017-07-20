import * as F from "../../types";
import {
  Setoid,
  Applicative,
  ApplicativeConstructor,
  of,
  map,
  ap
} from "../../types";
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
    f: (
      next: (a: T1) => { value: T2; done: boolean },
      done: (a: T1) => { value: T3; done: boolean },
      i: T1
    ) => Array<T2 | T3>,
    i: T1
  ) => {
    function stepNext(x) {
      return { value: x, done: false };
    }
    function stepDone(x) {
      return { value: x, done: true };
    }

    var todo = [i];
    var res = [];
    var xs;

    while (todo.length > 0) {
      xs = f(stepNext, stepDone, todo.shift());
      let buffer = [];
      for (let idx = 0; idx < xs.length; idx += 1) {
        (xs[idx].done ? res : buffer).push(xs[idx].value);
      }
      Array.prototype.unshift.apply(todo, buffer);
    }

    return res;
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
    equals: function<T extends Setoid>(other: Array<T>) {
      if (this.length !== other.length) {
        return false;
      }

      if (this === other) {
        return true;
      }

      for (var idx = 0; idx < this.length; idx += 1) {
        if (!Z.equals(this[idx], other[idx])) {
          return false;
        }
      }

      return true;
    },
    lte: function<T>(other: Array<T>) {
      var idx = 0;
      while (true) {
        if (idx === this.length) {
          return true;
        }

        if (idx === other.length) {
          return false;
        }

        if (!Z.equals(this[idx], other[idx])) {
          return Z.lte(this[idx], other[idx]);
        }

        idx += 1;
      }
    },
    ap: function<T, T1>(fs: Array<(x: T) => T1>) {
      var result = new this.constructor();

      for (var idx = 0; idx < fs.length; idx += 1) {
        for (var idx2 = 0; idx2 < this.length; idx2 += 1) {
          result.push(fs[idx](this[idx2]));
        }
      }

      return result;
    },
    chain: function<T, T1>(f: (a: T) => Array<T1>) {
      var result = new this.constructor();

      for (var v of this) {
        Array.prototype.push.apply(result, f(v));
      }

      return result;
    },
    traverse: function<T, T1>(
      A: ApplicativeConstructor,
      f: (a: T) => Applicative<T1>
    ) {
      type A = Applicative<T1>;
      type L = Array<A>;

      const list = map(f, this);
      var acc = of(A, new this.constructor());
      var idx = list.length - 1;

      while (idx >= 0) {
        acc = ap(
          map(
            (el: A) => (list: L) => new this.constructor(...[el, ...list]),
            list[idx]
          ),
          acc
        );
        idx -= 1;
      }

      return acc;
    }
  }
};

const ArrayExtended: Constructor = extendClass(Array, extended);

export default ArrayExtended;
