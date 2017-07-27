import { laws } from "../../../types";

test("obeys Setoid reflexivity", () => {
  laws.Setoid.reflexivity(1);
});

test("obeys Setoid symmetry", () => {
  laws.Setoid.symmetry(1, 2);
});

test("obeys Setoid transitivity", () => {
  laws.Setoid.transitivity(1, 1, 1);
});

test("obeys Ord totality", () => {
  laws.Ord.totality(1, 2);
});

test("obeys Ord antisymmetry", () => {
  laws.Ord.antisymmetry(1, 1);
});

test("obeys Ord transitivity", () => {
  laws.Ord.transitivity(1, 2, 3);
});
