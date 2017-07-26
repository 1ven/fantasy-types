import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity({ x: "a" });
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry({ x: "a" }, { x: "b" });
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity({ x: "a" }, { x: "a" }, { x: "a" });
});

test("conforms Ord totality", () => {
  laws.Ord.totality({ x: "a" }, { x: "b" });
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry({ x: "a" }, { x: "a" });
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity({ x: 1 }, { x: 2 }, { x: 3 });
});

test("conforms Semigroup associativity", () => {
  laws.Semigroup.associativity({ x: "a" }, { x: "b" }, { x: "c" });
});

test("conforms Monoid right identity", () => {
  laws.Monoid.rightIdentity(Object, { x: "m" });
});

test("conforms Monoid left identity", () => {
  laws.Monoid.leftIdentity(Object, { x: "m" });
});

test("conforms Functor identity", () => {
  laws.Functor.identity({ x: "u" });
});

test("conforms Functor composition", () => {
  laws.Functor.composition(
    { x: "u" },
    a => ({ x: a + "f" }),
    a => ({ x: a + "g" })
  );
});

test("conforms Apply composition", () => {
  laws.Apply.composition({ x: "v" }, { x: a => a + "u" }, { x: a => a + "a" });
});

test("conforms Alt associativity", () => {
  laws.Alt.associativity({ x: "a" }, { x: "b" }, { x: "c" });
});

test("conforms Alt distributivity", () => {
  laws.Alt.distributivity({ x: "a" }, { x: "b" }, x => x + "f");
});

test("conforms Plus right identity", () => {
  laws.Plus.rightIdentity(Object, { x: "x" });
});

test("conforms Plus left identity", () => {
  laws.Plus.leftIdentity(Object, { x: "x" });
});

test("conforms Plus annihilation", () => {
  laws.Plus.annihilation(Object, a => ({ x: a + "f" }));
});

test("conforms Alternative distributivity", () => {
  laws.Alternative.distributivity(
    { x: "x" },
    { x: a => a + "f" },
    { x: a => a + "f" }
  );
});

test("conforms Alternative annihilation", () => {
  laws.Alternative.annihilation(Object, { x: "x" });
});

test("conforms Foldable associativity", () => {
  laws.Foldable.associativity({ x: "u" }, (acc, val) => acc + val.x);
});

test("conforms Traversable naturality");

test("conforms Traversable identity", () => {
  laws.Traversable.identity(Array, { x: "u" });
});

test("conforms Traversable composition", () => {
  laws.Traversable.composition(Array, Array, {
    x: {
      y: {
        z: "u"
      }
    }
  });
});
