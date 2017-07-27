import { laws } from "../../../types";

test("obeys Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new Error("a"));
});

test("obeys Setoid symmetry", () => {
  laws.Setoid.symmetry(new Error("a"), new Error("b"));
});

test("obeys Setoid transitivity", () => {
  laws.Setoid.transitivity(new Error("a"), new Error("a"), new Error("a"));
});
