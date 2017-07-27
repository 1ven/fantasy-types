import { laws } from "../../../types";

test("obeys Setoid reflexivity", () => {
  laws.Setoid.reflexivity(["a"]);
});

test("obeys Setoid symmetry", () => {
  laws.Setoid.symmetry(["a"], ["b"]);
});

test("obeys Setoid transitivity", () => {
  laws.Setoid.transitivity(["a"], ["a"], ["a"]);
});

test("obeys Ord totality", () => {
  laws.Ord.totality(["a"], ["b"]);
});

test("obeys Ord antisymmetry", () => {
  laws.Ord.antisymmetry(["a"], ["a"]);
});

test("obeys Ord transitivity", () => {
  laws.Ord.transitivity([1], [2], [3]);
});

test("obeys Semigroup associativity", () => {
  laws.Semigroup.associativity(["a"], ["b"], ["c"]);
});

test("obeys Monoid right identity", () => {
  laws.Monoid.rightIdentity(Array, ["m"]);
});

test("obeys Monoid left identity", () => {
  laws.Monoid.leftIdentity(Array, ["m"]);
});

test("obeys Functor identity", () => {
  laws.Functor.identity(["u"]);
});

test("obeys Functor composition", () => {
  laws.Functor.composition(["u"], x => x + "f", x => x + "g");
});

test("obeys Apply composition", () => {
  laws.Apply.composition(["v"], [x => x + "u"], [x => x + "a"]);
});

test("obeys Applicative identity", () => {
  laws.Applicative.identity(Array, ["v"]);
});

test("obeys Applicative homomorphism", () => {
  laws.Applicative.homomorphism(Array, "x", x => x + "f");
});

test("obeys Applicative interchange", () => {
  laws.Applicative.interchange(Array, "y", [x => x + "u"]);
});

test("obeys Alt associativity", () => {
  laws.Alt.associativity(["a"], ["b"], ["c"]);
});

test("obeys Alt distributivity", () => {
  laws.Alt.distributivity(["a"], ["b"], x => x + "f");
});

test("obeys Plus right identity", () => {
  laws.Plus.rightIdentity(Array, ["x"]);
});

test("obeys Plus left identity", () => {
  laws.Plus.leftIdentity(Array, ["x"]);
});

test("obeys Plus annihilation", () => {
  laws.Plus.annihilation(Array, x => x + "f");
});

test("obeys Alternative distributivity", () => {
  laws.Alternative.distributivity(["x"], [x => x + "f"], [x => x + "f"]);
});

test("obeys Alternative annihilation", () => {
  laws.Alternative.annihilation(Array, ["x"]);
});

test("obeys Foldable associativity", () => {
  laws.Foldable.associativity(["u"], (acc, x) => acc + x);
});

// test("obeys Traversable naturality", () => {
//   laws.Traversable.naturality(
//     Array,
//     Array,
//    [["a"]],
//     x => [x]
//   );
// });

test("obeys Traversable naturality");

test("obeys Traversable identity", () => {
  laws.Traversable.identity(Array, ["u"]);
});

test("obeys Traversable composition", () => {
  laws.Traversable.composition(Array, Array, [[["u"]]]);
});

test("obeys Chain associativity", () => {
  laws.Chain.associativity(["m"], x => [x + "f"], x => [x + "g"]);
});

test("obeys Monad left identity", () => {
  laws.Monad.leftIdentity(Array, "a", x => [x + "f"]);
});

test("obeys Monad right identity", () => {
  laws.Monad.rightIdentity(Array, ["m"]);
});

test("obeys Extend associativity", () => {
  laws.Extend.associativity(["w"], x => ["g"], x => [["f"]]);
});

test("obeys ChainRec equivalence", () => {
  laws.ChainRec.equivalence(
    Array,
    (s: string) => s.length < 2,
    (s: string) => [s + "!"],
    (s: string) => [s + "?"],
    ""
  );
});
