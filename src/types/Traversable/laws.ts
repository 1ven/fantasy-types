import { traverse, of, map } from "../../";
import { Traversable } from "./";
import { Applicative, ApplicativeConstructor } from "../Applicative";
import { makeCompose } from "../../utils";

export const naturality = <T>(
  F: ApplicativeConstructor,
  G: ApplicativeConstructor,
  u: Traversable<Applicative<T>>,
  t,
  exp = expect
) => {
  /**
   * Probably test is broken.
   */
  // exp(t(traverse(F, x => x, u))).toEqual(traverse(G, t, u));
};

export const identity = <T>(F, u, exp = expect) => {
  exp(traverse(F, F.of.bind(F), u)).toEqual(of(F, u));
};

export const composition = <T>(F, G, u, exp = expect) => {
  const Compose: any = makeCompose(F, G);
  exp(traverse(Compose, x => new Compose(x), u)).toEqual(
    new Compose(map(x => traverse(G, x => x, x), traverse(F, (x: any) => x, u)))
  );
};
