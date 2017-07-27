import { laws } from "../../../types";

test("obeys Setoid reflexivity", () => {
  laws.Setoid.reflexivity({ x: "a" });
});

test("obeys Setoid symmetry", () => {
  laws.Setoid.symmetry({ x: "a" }, { x: "b" });
});

test("obeys Setoid transitivity", () => {
  laws.Setoid.transitivity({ x: "a" }, { x: "a" }, { x: "a" });
});

test("obeys Ord totality", () => {
  laws.Ord.totality({ x: "a" }, { x: "b" });
});

test("obeys Ord antisymmetry", () => {
  laws.Ord.antisymmetry({ x: "a" }, { x: "a" });
});

test("obeys Ord transitivity", () => {
  laws.Ord.transitivity({ x: 1 }, { x: 2 }, { x: 3 });
});

test("obeys Semigroup associativity", () => {
  laws.Semigroup.associativity({ x: "a" }, { x: "b" }, { x: "c" });
});

test("obeys Monoid right identity", () => {
  laws.Monoid.rightIdentity(Object, { x: "m" });
});

test("obeys Monoid left identity", () => {
  laws.Monoid.leftIdentity(Object, { x: "m" });
});

test("obeys Functor identity", () => {
  laws.Functor.identity({ x: "u" });
});

test("obeys Functor composition", () => {
  laws.Functor.composition(
    { x: "u" },
    a => ({ x: a + "f" }),
    a => ({ x: a + "g" })
  );
});

test("obeys Apply composition", () => {
  laws.Apply.composition({ x: "v" }, { x: a => a + "u" }, { x: a => a + "a" });
});

test("obeys Alt associativity", () => {
  laws.Alt.associativity({ x: "a" }, { x: "b" }, { x: "c" });
});

test("obeys Alt distributivity", () => {
  laws.Alt.distributivity({ x: "a" }, { x: "b" }, x => x + "f");
});

test("obeys Plus right identity", () => {
  laws.Plus.rightIdentity(Object, { x: "x" });
});

test("obeys Plus left identity", () => {
  laws.Plus.leftIdentity(Object, { x: "x" });
});

test("obeys Plus annihilation", () => {
  laws.Plus.annihilation(Object, a => ({ x: a + "f" }));
});

test("obeys Alternative distributivity", () => {
  laws.Alternative.distributivity(
    { x: "x" },
    { x: a => a + "f" },
    { x: a => a + "f" }
  );
});

test("obeys Alternative annihilation", () => {
  laws.Alternative.annihilation(Object, { x: "x" });
});

test("obeys Foldable associativity", () => {
  laws.Foldable.associativity({ x: "u" }, (acc, val) => acc + val.x);
});

test("obeys Traversable naturality");

test("obeys Traversable identity", () => {
  laws.Traversable.identity(Array, { x: "u" });
});

test("obeys Traversable composition", () => {
  laws.Traversable.composition(Array, Array, {
    x: {
      y: {
        z: "u"
      }
    }
  });
});
