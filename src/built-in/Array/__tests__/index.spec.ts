import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(["a"]);
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(["a"], ["b"]);
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(["a"], ["a"], ["a"]);
});

test("conforms Ord totality", () => {
  laws.Ord.totality(["a"], ["b"]);
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry(["a"], ["a"]);
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity([1], [2], [3]);
});

test("conforms Semigroup associativity", () => {
  laws.Semigroup.associativity(["a"], ["b"], ["c"]);
});

test("conforms Monoid right identity", () => {
  laws.Monoid.rightIdentity(Array, ["m"]);
});

test("conforms Monoid left identity", () => {
  laws.Monoid.leftIdentity(Array, ["m"]);
});

test("conforms Functor identity", () => {
  laws.Functor.identity(["u"]);
});

test("conforms Functor composition", () => {
  laws.Functor.composition(["u"], x => x + "f", x => x + "g");
});

test("conforms Apply composition", () => {
  laws.Apply.composition(["v"], [x => x + "u"], [x => x + "a"]);
});

test("conforms Applicative identity", () => {
  laws.Applicative.identity(Array, ["v"]);
});

test("conforms Applicative homomorphism", () => {
  laws.Applicative.homomorphism(Array, "x", x => x + "f");
});

test("conforms Applicative interchange", () => {
  laws.Applicative.interchange(Array, "y", [x => x + "u"]);
});

test("conforms Alt associativity", () => {
  laws.Alt.associativity(["a"], ["b"], ["c"]);
});

test("conforms Alt distributivity", () => {
  laws.Alt.distributivity(["a"], ["b"], x => x + "f");
});

test("conforms Plus right identity", () => {
  laws.Plus.rightIdentity(Array, ["x"]);
});

test("conforms Plus left identity", () => {
  laws.Plus.leftIdentity(Array, ["x"]);
});

test("conforms Plus annihilation", () => {
  laws.Plus.annihilation(Array, x => x + "f");
});

test("conforms Alternative distributivity", () => {
  laws.Alternative.distributivity(["x"], [x => x + "f"], [x => x + "f"]);
});

test("conforms Alternative annihilation", () => {
  laws.Alternative.annihilation(Array, ["x"]);
});

test("conforms Foldable associativity", () => {
  laws.Foldable.associativity(["u"], (acc, x) => acc + x);
});

// test("conforms Traversable naturality", () => {
//   laws.Traversable.naturality(
//     Array,
//     Array,
//    [["a"]],
//     x => [x]
//   );
// });

test("conforms Traversable naturality");

test("conforms Traversable identity", () => {
  laws.Traversable.identity(Array, ["u"]);
});

test("conforms Traversable composition", () => {
  laws.Traversable.composition(Array, Array, [[["u"]]]);
});

test("conforms Chain associativity", () => {
  laws.Chain.associativity(["m"], x => [x + "f"], x => [x + "g"]);
});

test("conforms Monad left identity", () => {
  laws.Monad.leftIdentity(Array, "a", x => [x + "f"]);
});

test("conforms Monad right identity", () => {
  laws.Monad.rightIdentity(Array, ["m"]);
});

test("conforms Extend associativity", () => {
  laws.Extend.associativity(["w"], x => ["g"], x => [["f"]]);
});

test("conforms ChainRec equivalence", () => {
  laws.ChainRec.equivalence(
    Array,
    (s: string) => s.length < 2,
    (s: string) => [s + "!"],
    (s: string) => [s + "?"],
    ""
  );
});
