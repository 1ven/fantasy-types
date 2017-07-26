import {
  ApplicativeConstructor,
  Applicative,
  Apply,
  ap,
  map,
  of
} from "../types";

export default (F: ApplicativeConstructor, G: ApplicativeConstructor) =>
  <ApplicativeConstructor>class Compose<T> implements Applicative<T> {
    constructor(public value: Applicative<Applicative<T>>) {}

    static of<T>(x: T) {
      return new Compose<T>(of(F, of(G, x)));
    }

    public ap<T1>(b: Compose<(a: T) => T1>) {
      // .map returns Functor, but should return Compose type. Generic problem
      return new Compose<T1>(
        ap(map(u => y => ap(u, y), b.value) as any, this.value)
      );
    }

    public map<T1>(f: (a: T) => T1) {
      return new Compose<T1>(map(y => map(f, y), this.value) as any);
    }
  };
