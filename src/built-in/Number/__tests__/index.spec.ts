import NumberExtended from "../";
import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new NumberExtended(1));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(new NumberExtended(1), new NumberExtended(2));
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(
    new NumberExtended(1),
    new NumberExtended(1),
    new NumberExtended(1)
  );
});

test("conforms Ord totality", () => {
  laws.Ord.totality(new NumberExtended(1), new NumberExtended(2));
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry(new NumberExtended(1), new NumberExtended(1));
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity(
    new NumberExtended(1),
    new NumberExtended(2),
    new NumberExtended(3)
  );
});
