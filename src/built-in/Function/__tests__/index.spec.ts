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

test("conforms Functor identity", () => {
  run(F.laws.Functor.identity1, [a => a + 1], 5);
});

test("conforms Functor composition", () => {
  run(
    F.laws.Functor.composition1,
    [x => x + "a", x => x + "f", x => x + "g"],
    "x"
  );
});

test("conforms Profunctor identity", () => {
  run(F.laws.Profunctor.identity, [x => x + "a"], "x");
});

test("conforms Profunctor composition", () => {
  run(
    F.laws.Profunctor.composition,
    [x => x + "a", x => x + "f", x => x + "g", x => x + "h", x => x + "i"],
    "x"
  );
});

test("conforms Apply composition", () => {
  run(
    F.laws.Apply.composition1,
    [x => x + "a", x => y => x + y + "u", x => y => x + y + "a"],
    "x"
  );
});

test("conforms Applicative identity", () => {
  run(F.laws.Applicative.identity1, [Function, x => x + "a"], "x");
});

test("conforms Applicative homomorphism", () => {
  run(F.laws.Applicative.homomorphism1, [Function, "val", x => x + "b"], "x");
});

test("conforms Applicative interchange", () => {
  run(F.laws.Applicative.interchange1, [Function, "val", x => y => x + y], "x");
});

test("conforms Chain associativity", () => {
  run(
    F.laws.Chain.associativity1,
    [x => x + "a", x => y => x + y + "f", x => y => x + y + "g"],
    "x"
  );
});

test("conforms Contravariant identity", () => {
  run(F.laws.Contravariant.identity, [x => y => x + y + "a"], "x");
});

test("conforms Contravariant composition", () => {
  run(
    F.laws.Contravariant.composition,
    [x => x + "a", x => x + "f", x => x + "g"],
    "x"
  );
});

test("conforms Setoid reflexivity", () => {
  F.laws.Setoid.reflexivity1(x => x + "a");
});

test("conforms Setoid symmetry", () => {
  F.laws.Setoid.symmetry1(x => x + "a", y => y + "a");
});

test("conforms Setoid transitivity", () => {
  F.laws.Setoid.transitivity1(x => x + "a", y => y + "a", z => z + "a");
});

test("conforms Semigroupoid associativity", () => {
  run(
    F.laws.Semigroupoid.associativity,
    [x => x + "a", x => x + "b", x => x + "c"],
    "x"
  );
});

test("conforms Category left identity", () => {
  run(F.laws.Category.leftIdentity, [Function, x => x + "a"], "x");
});

test("conforms Category right identity", () => {
  run(F.laws.Category.rightIdentity, [Function, x => x + "a"], "x");
});
