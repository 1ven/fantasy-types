import { laws } from "../../../types";

const exec = (x, input) => {
  const result = x(input);
  return typeof result !== "function" ? result : result(input);
};

const run = (law, args, input) =>
  law.apply(null, [
    ...args,
    left => ({
      toEqual: right => expect(exec(left, input)).toEqual(exec(right, input))
    })
  ]);

test("obeys Functor identity", () => {
  run(laws.Functor.identity, [a => a + 1], 5);
});

test("obeys Functor composition", () => {
  run(
    laws.Functor.composition,
    [x => x + "a", x => x + "f", x => x + "g"],
    "x"
  );
});

test("obeys Profunctor identity", () => {
  run(laws.Profunctor.identity, [x => x + "a"], "x");
});

test("obeys Profunctor composition", () => {
  run(
    laws.Profunctor.composition,
    [x => x + "a", x => x + "f", x => x + "g", x => x + "h", x => x + "i"],
    "x"
  );
});

test("obeys Apply composition", () => {
  run(
    laws.Apply.composition,
    [x => x + "a", x => y => x + y + "u", x => y => x + y + "a"],
    "x"
  );
});

test("obeys Applicative identity", () => {
  run(laws.Applicative.identity, [Function, x => x + "a"], "x");
});

test("obeys Applicative homomorphism", () => {
  run(laws.Applicative.homomorphism, [Function, "val", x => x + "b"], "x");
});

test("obeys Applicative interchange", () => {
  run(laws.Applicative.interchange, [Function, "val", x => y => x + y], "x");
});

test("obeys Chain associativity", () => {
  run(
    laws.Chain.associativity,
    [x => x + "a", x => y => x + y + "f", x => y => x + y + "g"],
    "x"
  );
});

test("obeys Contravariant identity", () => {
  run(laws.Contravariant.identity, [x => y => x + y + "a"], "x");
});

test("obeys Contravariant composition", () => {
  run(
    laws.Contravariant.composition,
    [x => x + "a", x => x + "f", x => x + "g"],
    "x"
  );
});

test("obeys Setoid reflexivity", () => {
  laws.Setoid.reflexivity(x => x + "a");
});

test("obeys Setoid symmetry", () => {
  laws.Setoid.symmetry(x => x + "a", y => y + "a");
});

test("obeys Setoid transitivity", () => {
  const func = x => x + "a";
  laws.Setoid.transitivity(func, func, func);
});

test("obeys Semigroupoid associativity", () => {
  run(
    laws.Semigroupoid.associativity,
    [x => x + "a", x => x + "b", x => x + "c"],
    "x"
  );
});

test("obeys Category left identity", () => {
  run(laws.Category.leftIdentity, [Function, x => x + "a"], "x");
});

test("obeys Category right identity", () => {
  run(laws.Category.rightIdentity, [Function, x => x + "a"], "x");
});
