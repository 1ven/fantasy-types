import { laws } from "../../../types";

test("obeys Setoid reflexivity", () => {
  laws.Setoid.reflexivity("a");
});

test("obeys Setoid symmetry", () => {
  laws.Setoid.symmetry("a", "a");
});

test("obeys Setoid transitivity", () => {
  laws.Setoid.transitivity("a", "a", "a");
});

test("obeys Ord totality", () => {
  laws.Ord.totality("a", "b");
});

test("obeys Ord antisymmetry", () => {
  laws.Ord.antisymmetry("a", "a");
});

test("obeys Ord transitivity", () => {
  laws.Ord.transitivity("a", "b", "c");
});

test("obeys Semigroup associativity", () => {
  laws.Semigroup.associativity("a", "b", "c");
});

test("obeys Monoid right identity", () => {
  laws.Monoid.rightIdentity(String, "m");
});

test("obeys Monoid left identity", () => {
  laws.Monoid.leftIdentity(String, "m");
});
