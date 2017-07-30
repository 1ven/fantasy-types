import prop from "../prop";

test("should return value of given object by key", () => {
  expect(prop("name", { name: "John" })).toBe("John");
});

test("should return undefined if key does not exist", () => {
  expect((prop as any)("age", { name: "John" })).toBeUndefined();
});
