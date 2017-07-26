import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new Date(1));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(new Date(1), new Date(2));
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(new Date(1), new Date(1), new Date(1));
});

test("conforms Ord totality", () => {
  laws.Ord.totality(new Date(1), new Date(2));
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry(new Date(1), new Date(1));
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity(new Date(1), new Date(2), new Date(3));
});
