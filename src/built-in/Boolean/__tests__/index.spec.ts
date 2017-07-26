import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(true);
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(true, false);
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(true, true, true);
});

test("conforms Ord totality", () => {
  laws.Ord.totality(true, false);
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry(true, true);
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity(false, false, false);
});
