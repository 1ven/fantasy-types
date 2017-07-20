import StringExtended from "../";
import { laws } from "../../../types";

test("conforms Setoid reflexivity", () => {
  laws.Setoid.reflexivity(new StringExtended("a"));
});

test("conforms Setoid symmetry", () => {
  laws.Setoid.symmetry(new StringExtended("a"), new StringExtended("a"));
});

test("conforms Setoid transitivity", () => {
  laws.Setoid.transitivity(
    new StringExtended("a"),
    new StringExtended("a"),
    new StringExtended("a")
  );
});

test("conforms Ord totality", () => {
  laws.Ord.totality(new StringExtended("a"), new StringExtended("b"));
});

test("conforms Ord antisymmetry", () => {
  laws.Ord.antisymmetry(new StringExtended("a"), new StringExtended("a"));
});

test("conforms Ord transitivity", () => {
  laws.Ord.transitivity(
    new StringExtended("a"),
    new StringExtended("b"),
    new StringExtended("c")
  );
});

test("conforms Semigroup associativity", () => {
  laws.Semigroup.associativity(
    new StringExtended("a"),
    new StringExtended("b"),
    new StringExtended("c")
  );
});

test("conforms Monoid right identity", () => {
  laws.Monoid.rightIdentity(StringExtended, new StringExtended("m"));
});

test("conforms Monoid left identity", () => {
  laws.Monoid.leftIdentity(StringExtended, new StringExtended("m"));
});
