import { Monad, MonadConstructor } from "./";

export const leftIdentity = <T>(
  M: MonadConstructor,
  a: T,
  f: (a: T) => Monad<T>
) => {
  expect(M.of(a).chain(f)).toEqual(f(a));
};

export const rightIdentity = <T>(M: MonadConstructor, m: Monad<T>) => {
  expect(m.chain(M.of.bind(M))).toEqual(m);
};
