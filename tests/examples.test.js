// tests/example.test.js

const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); // ✅ Passing test
});

test('adds 1 + 2 to equal 4', () => {
  expect(sum(1, 2)).toBe(4); // ❌ Failing test
});
