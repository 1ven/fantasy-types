import DateExtended from "../";
import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new DateExtended("a"));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(new DateExtended("a"), new DateExtended("b"));
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(
    new DateExtended("a"),
    new DateExtended("a"),
    new DateExtended("a")
  );
});
