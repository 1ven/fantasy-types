import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new Error("a"));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(new Error("a"), new Error("b"));
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(new Error("a"), new Error("a"), new Error("a"));
});
