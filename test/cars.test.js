const test = require("node:test");
const assert = require("node:assert");
const { CARS, filterByType, sortByPower, formatPrice, hpToKw } = require("../src/cars.js");

test("filterByType returns only matching body types", () => {
  const suvs = filterByType(CARS, "SUV");
  assert.ok(suvs.length > 0);
  assert.ok(suvs.every((c) => c.type === "SUV"));
});

test("filterByType 'All' returns every car", () => {
  assert.strictEqual(filterByType(CARS, "All").length, CARS.length);
});

test("sortByPower puts the most powerful car first", () => {
  const sorted = sortByPower(CARS);
  assert.strictEqual(sorted[0].name, "AMG GT");
});

test("formatPrice adds currency symbol and separators", () => {
  assert.strictEqual(formatPrice(47000), "$47,000");
});

test("hpToKw converts horsepower to kilowatts", () => {
  assert.strictEqual(hpToKw(100), 75);
});
