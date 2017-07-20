import DateExtended from "../";
import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new DateExtended(1));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(new DateExtended(1), new DateExtended(2));
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(
    new DateExtended(1),
    new DateExtended(1),
    new DateExtended(1)
  );
});

test("conforms Ord totality", () => {
  laws.Ord.totality(new DateExtended(1), new DateExtended(2));
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry(new DateExtended(1), new DateExtended(1));
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity(
    new DateExtended(1),
    new DateExtended(2),
    new DateExtended(3)
  );
});
