import ErrorExtended from "../";
import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new ErrorExtended("a"));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(new ErrorExtended("a"), new ErrorExtended("b"));
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(
    new ErrorExtended("a"),
    new ErrorExtended("a"),
    new ErrorExtended("a")
  );
});
