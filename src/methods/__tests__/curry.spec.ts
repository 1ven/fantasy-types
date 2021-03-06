import curry from "../curry";

test("should return curried function", () => {
  const foo = curry((a, b, c) => a + b + c);
  const result = "abc";

  expect(foo("a", "b", "c")).toBe(result);
  expect(foo("a", "b")("c")).toBe(result);
  expect(foo("a")("b", "c")).toBe(result);
  expect(foo("a")("b")("c")).toBe(result);
});
