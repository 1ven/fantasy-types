import { laws } from "../../../types";

test("obeys Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new RegExp("a"));
});

test("obeys Setoid symmetry", () => {
  laws.Setoid.symmetry(new RegExp("a"), new RegExp("b"));
});

test("obeys Setoid transitivity", () => {
  laws.Setoid.transitivity(new RegExp("a"), new RegExp("a"), new RegExp("a"));
});
