import { Traversable } from "./";
import { Applicative, ApplicativeConstructor } from "../Applicative";
import { makeCompose } from "../../utils";

export const naturality = <T>(
  F: ApplicativeConstructor,
  G: ApplicativeConstructor,
  u: Traversable<Applicative<T>>,
  t
) => {
  expect(t(u.traverse(F, x => x))).toEqual(u.traverse(G, t));
};

export const identity = <T>(F: ApplicativeConstructor, u: Traversable<T>) => {
  expect(u.traverse(F, F.of.bind(F))).toEqual(F.of(u));
};

export const composition = <T>(
  F: ApplicativeConstructor,
  G: ApplicativeConstructor,
  u
) => {
  const Compose: any = makeCompose(F, G);
  expect(u.traverse(Compose, x => new Compose(x))).toEqual(
    new Compose(u.traverse(F, x => x).map(x => x.traverse(G, x => x)))
  );
};
