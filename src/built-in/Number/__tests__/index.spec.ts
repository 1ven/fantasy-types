import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(1);
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(1, 2);
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(1, 1, 1);
});

test("conforms Ord totality", () => {
  laws.Ord.totality(1, 2);
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry(1, 1);
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity(1, 2, 3);
});
