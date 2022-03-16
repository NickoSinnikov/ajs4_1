import showHealth from "../app";

test.each([
  { name: "Mar", health: 90, expected: "healthy" },
  { name: "Mar", health: 50, expected: "wounded" },
  { name: "Mar", health: 40, expected: "wounded" },
  { name: "Mar", health: 15, expected: "wounded" },
  { name: "Mar", health: 10, expected: "critical" },
])("should return status for health", ({ name, health, expected }) => {
  const received = showHealth({
    name,
    health,
  });

  expect(received).toEqual(expected);
});
