import ObjectExtended from "../";
import ArrayExtended from "../../Array";
import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new ObjectExtended({ x: "a" }));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(
    new ObjectExtended({ x: "a" }),
    new ObjectExtended({ x: "b" })
  );
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(
    new ObjectExtended({ x: "a" }),
    new ObjectExtended({ x: "a" }),
    new ObjectExtended({ x: "a" })
  );
});

test("conforms Ord totality", () => {
  laws.Ord.totality(
    new ObjectExtended({ x: "a" }),
    new ObjectExtended({ x: "b" })
  );
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry(
    new ObjectExtended({ x: "a" }),
    new ObjectExtended({ x: "a" })
  );
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity(
    new ObjectExtended({ x: 1 }),
    new ObjectExtended({ x: 2 }),
    new ObjectExtended({ x: 3 })
  );
});

test("conforms Semigroup associativity", () => {
  laws.Semigroup.associativity(
    new ObjectExtended({ x: "a" }),
    new ObjectExtended({ x: "b" }),
    new ObjectExtended({ x: "c" })
  );
});

test("conforms Monoid right identity", () => {
  laws.Monoid.rightIdentity(ObjectExtended, new ObjectExtended({ x: "m" }));
});

test("conforms Monoid left identity", () => {
  laws.Monoid.leftIdentity(ObjectExtended, new ObjectExtended({ x: "m" }));
});

test("conforms Functor identity", () => {
  laws.Functor.identity(new ObjectExtended({ x: "u" }));
});

test("conforms Functor composition", () => {
  laws.Functor.composition(
    new ObjectExtended({ x: "u" }),
    a => ({ x: a + "f" }),
    a => ({ x: a + "g" })
  );
});

test("conforms Apply composition", () => {
  laws.Apply.composition(
    new ObjectExtended({ x: "v" }),
    new ObjectExtended({ x: a => a + "u" }),
    new ObjectExtended({ x: a => a + "a" })
  );
});

test("conforms Alt associativity", () => {
  laws.Alt.associativity(
    new ObjectExtended({ x: "a" }),
    new ObjectExtended({ x: "b" }),
    new ObjectExtended({ x: "c" })
  );
});

test("conforms Alt distributivity", () => {
  laws.Alt.distributivity(
    new ObjectExtended({ x: "a" }),
    new ObjectExtended({ x: "b" }),
    x => x + "f"
  );
});

test("conforms Plus right identity", () => {
  laws.Plus.rightIdentity(ObjectExtended, new ObjectExtended({ x: "x" }));
});

test("conforms Plus left identity", () => {
  laws.Plus.leftIdentity(ObjectExtended, new ObjectExtended({ x: "x" }));
});

test("conforms Plus annihilation", () => {
  laws.Plus.annihilation(ObjectExtended, a => ({ x: a + "f" }));
});

test("conforms Alternative distributivity", () => {
  laws.Alternative.distributivity(
    new ObjectExtended({ x: "x" }),
    new ObjectExtended({ x: a => a + "f" }),
    new ObjectExtended({ x: a => a + "f" })
  );
});

test("conforms Alternative annihilation", () => {
  laws.Alternative.annihilation(ObjectExtended, new ObjectExtended({ x: "x" }));
});

test("conforms Foldable associativity", () => {
  laws.Foldable.associativity(
    new ObjectExtended({ x: "u" }),
    (acc, val) => acc + val.x
  );
});

// test("conforms Traversable naturality", () => {
//   laws.Traversable.naturality(
//     ArrayExtended,
//     ArrayExtended,
//     new ObjectExtended({ x: new ArrayExtended("a") }),
//     x => [x]
//   );
// });

test("conforms Traversable naturality");

test("conforms Traversable identity", () => {
  laws.Traversable.identity(ArrayExtended, new ObjectExtended({ x: "u" }));
});

test("conforms Traversable composition", () => {
  laws.Traversable.composition(
    ArrayExtended,
    ArrayExtended,
    new ObjectExtended(new ObjectExtended(new ObjectExtended({ x: "u" })))
  );
});
