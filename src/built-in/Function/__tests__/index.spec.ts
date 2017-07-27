import * as F from "../../../types";

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
  run(F.laws.Functor.identity, [a => a + 1], 5);
});

test("obeys Functor composition", () => {
  run(
    F.laws.Functor.composition,
    [x => x + "a", x => x + "f", x => x + "g"],
    "x"
  );
});

test("obeys Profunctor identity", () => {
  run(F.laws.Profunctor.identity, [x => x + "a"], "x");
});

test("obeys Profunctor composition", () => {
  run(
    F.laws.Profunctor.composition,
    [x => x + "a", x => x + "f", x => x + "g", x => x + "h", x => x + "i"],
    "x"
  );
});

test("obeys Apply composition", () => {
  run(
    F.laws.Apply.composition,
    [x => x + "a", x => y => x + y + "u", x => y => x + y + "a"],
    "x"
  );
});

test("obeys Applicative identity", () => {
  run(F.laws.Applicative.identity, [Function, x => x + "a"], "x");
});

test("obeys Applicative homomorphism", () => {
  run(F.laws.Applicative.homomorphism, [Function, "val", x => x + "b"], "x");
});

test("obeys Applicative interchange", () => {
  run(F.laws.Applicative.interchange, [Function, "val", x => y => x + y], "x");
});

test("obeys Chain associativity", () => {
  run(
    F.laws.Chain.associativity,
    [x => x + "a", x => y => x + y + "f", x => y => x + y + "g"],
    "x"
  );
});

test("obeys Contravariant identity", () => {
  run(F.laws.Contravariant.identity, [x => y => x + y + "a"], "x");
});

test("obeys Contravariant composition", () => {
  run(
    F.laws.Contravariant.composition,
    [x => x + "a", x => x + "f", x => x + "g"],
    "x"
  );
});

test("obeys Setoid reflexivity", () => {
  F.laws.Setoid.reflexivity(x => x + "a");
});

test("obeys Setoid symmetry", () => {
  F.laws.Setoid.symmetry(x => x + "a", y => y + "a");
});

test("obeys Setoid transitivity", () => {
  const func = x => x + "a";
  F.laws.Setoid.transitivity(func, func, func);
});

test("obeys Semigroupoid associativity", () => {
  run(
    F.laws.Semigroupoid.associativity,
    [x => x + "a", x => x + "b", x => x + "c"],
    "x"
  );
});

test("obeys Category left identity", () => {
  run(F.laws.Category.leftIdentity, [Function, x => x + "a"], "x");
});

test("obeys Category right identity", () => {
  run(F.laws.Category.rightIdentity, [Function, x => x + "a"], "x");
});
