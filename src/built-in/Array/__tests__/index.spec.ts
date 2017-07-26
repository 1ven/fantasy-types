import ArrayExtended from "../";
import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new ArrayExtended("a"));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(new ArrayExtended("a"), new ArrayExtended("b"));
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(
    new ArrayExtended("a"),
    new ArrayExtended("a"),
    new ArrayExtended("a")
  );
});

test("conforms Ord totality", () => {
  laws.Ord.totality(new ArrayExtended("a"), new ArrayExtended("b"));
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry(new ArrayExtended("a"), new ArrayExtended("a"));
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity(
    new ArrayExtended(1),
    new ArrayExtended(2),
    new ArrayExtended(3)
  );
});

test("conforms Semigroup associativity", () => {
  laws.Semigroup.associativity(
    new ArrayExtended("a"),
    new ArrayExtended("b"),
    new ArrayExtended("c")
  );
});

test("conforms Monoid right identity", () => {
  laws.Monoid.rightIdentity(ArrayExtended, new ArrayExtended("m"));
});

test("conforms Monoid left identity", () => {
  laws.Monoid.leftIdentity(ArrayExtended, new ArrayExtended("m"));
});

test("conforms Functor identity", () => {
  laws.Functor.identity(new ArrayExtended("u"));
});

test("conforms Functor composition", () => {
  laws.Functor.composition(new ArrayExtended("u"), x => x + "f", x => x + "g");
});

test("conforms Apply composition", () => {
  laws.Apply.composition(
    new ArrayExtended("v"),
    new ArrayExtended(x => x + "u"),
    new ArrayExtended(x => x + "a")
  );
});

test("conforms Applicative identity", () => {
  laws.Applicative.identity(ArrayExtended, new ArrayExtended("v"));
});

test("conforms Applicative homomorphism", () => {
  laws.Applicative.homomorphism(ArrayExtended, "x", x => x + "f");
});

test("conforms Applicative interchange", () => {
  laws.Applicative.interchange(
    ArrayExtended,
    "y",
    new ArrayExtended(x => x + "u")
  );
});

test("conforms Alt associativity", () => {
  laws.Alt.associativity(
    new ArrayExtended("a"),
    new ArrayExtended("b"),
    new ArrayExtended("c")
  );
});

test("conforms Alt distributivity", () => {
  laws.Alt.distributivity(
    new ArrayExtended("a"),
    new ArrayExtended("b"),
    x => x + "f"
  );
});

test("conforms Plus right identity", () => {
  laws.Plus.rightIdentity(ArrayExtended, new ArrayExtended("x"));
});

test("conforms Plus left identity", () => {
  laws.Plus.leftIdentity(ArrayExtended, new ArrayExtended("x"));
});

test("conforms Plus annihilation", () => {
  laws.Plus.annihilation(ArrayExtended, x => x + "f");
});

test("conforms Alternative distributivity", () => {
  laws.Alternative.distributivity(
    new ArrayExtended("x"),
    new ArrayExtended(x => x + "f"),
    new ArrayExtended(x => x + "f")
  );
});

test("conforms Alternative annihilation", () => {
  laws.Alternative.annihilation(ArrayExtended, new ArrayExtended("x"));
});

test("conforms Foldable associativity", () => {
  laws.Foldable.associativity(new ArrayExtended("u"), (acc, x) => acc + x);
});

// test("conforms Traversable naturality", () => {
//   laws.Traversable.naturality(
//     ArrayExtended,
//     ArrayExtended,
//     new ArrayExtended(new ArrayExtended("a")),
//     x => [x]
//   );
// });

test("conforms Traversable naturality");

test("conforms Traversable identity", () => {
  laws.Traversable.identity(ArrayExtended, new ArrayExtended("u"));
});

test("conforms Traversable composition", () => {
  laws.Traversable.composition(
    ArrayExtended,
    ArrayExtended,
    new ArrayExtended(new ArrayExtended(new ArrayExtended("u")))
  );
});

test("conforms Chain associativity", () => {
  laws.Chain.associativity(
    new ArrayExtended("m"),
    x => new ArrayExtended(x + "f"),
    x => new ArrayExtended(x + "g")
  );
});

test("conforms Monad left identity", () => {
  laws.Monad.leftIdentity(
    ArrayExtended as any,
    "a",
    x => new ArrayExtended(x + "f")
  );
});

test("conforms Monad right identity", () => {
  laws.Monad.rightIdentity(ArrayExtended as any, new ArrayExtended("m"));
});

test("conforms Extend associativity", () => {
  laws.Extend.associativity(
    new ArrayExtended("w"),
    x => new ArrayExtended("g"),
    x => new ArrayExtended(new ArrayExtended("f"))
  );
});

test("conforms ChainRec equivalence", () => {
  laws.ChainRec.equivalence(
    ArrayExtended,
    (s: string) => s.length < 2,
    (s: string) => [s + "!"],
    (s: string) => [s + "?"],
    ""
  );
});
