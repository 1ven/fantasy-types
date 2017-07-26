import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity("a");
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry("a", "a");
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity("a", "a", "a");
});

test("conforms Ord totality", () => {
  laws.Ord.totality("a", "b");
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry("a", "a");
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity("a", "b", "c");
});

test("conforms Semigroup associativity", () => {
  laws.Semigroup.associativity("a", "b", "c");
});

test("conforms Monoid right identity", () => {
  laws.Monoid.rightIdentity(String, "m");
});

test("conforms Monoid left identity", () => {
  laws.Monoid.leftIdentity(String, "m");
});
