import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new RegExp("a"));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(new RegExp("a"), new RegExp("b"));
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(new RegExp("a"), new RegExp("a"), new RegExp("a"));
});
