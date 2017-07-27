import { laws } from "../../../types";

test("obeys Setoid reflexivity", () => {
  laws.Setoid.reflexivity(true);
});

test("obeys Setoid symmetry", () => {
  laws.Setoid.symmetry(true, false);
});

test("obeys Setoid transitivity", () => {
  laws.Setoid.transitivity(true, true, true);
});

test("obeys Ord totality", () => {
  laws.Ord.totality(true, false);
});

test("obeys Ord antisymmetry", () => {
  laws.Ord.antisymmetry(true, true);
});

test("obeys Ord transitivity", () => {
  laws.Ord.transitivity(false, false, false);
});
