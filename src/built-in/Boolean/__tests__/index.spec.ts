import BooleanExtended from "../";
import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new BooleanExtended(true));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(new BooleanExtended(true), new BooleanExtended(false));
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(
    new BooleanExtended(true),
    new BooleanExtended(true),
    new BooleanExtended(true)
  );
});

test("conforms Ord totality", () => {
  laws.Ord.totality(new BooleanExtended(true), new BooleanExtended(false));
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry(new BooleanExtended(true), new BooleanExtended(true));
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity(
    new BooleanExtended(false),
    new BooleanExtended(false),
    new BooleanExtended(false)
  );
});
