import RegExpExtended from "../";
import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new RegExpExtended("a"));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(new RegExpExtended("a"), new RegExpExtended("b"));
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(
    new RegExpExtended("a"),
    new RegExpExtended("a"),
    new RegExpExtended("a")
  );
});
