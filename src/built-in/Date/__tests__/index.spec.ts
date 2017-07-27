import { laws } from "../../../types";

test("obeys Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new Date(1));
});

test("obeys Setoid symmetry", () => {
  laws.Setoid.symmetry(new Date(1), new Date(2));
});

test("obeys Setoid transitivity", () => {
  laws.Setoid.transitivity(new Date(1), new Date(1), new Date(1));
});

test("obeys Ord totality", () => {
  laws.Ord.totality(new Date(1), new Date(2));
});

test("obeys Ord antisymmetry", () => {
  laws.Ord.antisymmetry(new Date(1), new Date(1));
});

test("obeys Ord transitivity", () => {
  laws.Ord.transitivity(new Date(1), new Date(2), new Date(3));
});
