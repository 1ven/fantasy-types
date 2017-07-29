import flow from "../flow";

test("should compose functions from right to left", () => {
  expect(
    flow(
      (a: string) => a + "f",
      (a: string) => a + "g",
      (a: string) => a + "x",
      (a: string) => a + "y"
    )("a")
  ).toBe("ayxgf");
});

test("should return a function which accepts multiple arguments", () => {
  expect(flow(a => a + "f", (a, b, c) => a + b + c + "g")("a", "b", "c")).toBe(
    "abcgf"
  );
});
