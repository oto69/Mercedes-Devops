// Pure logic for the Mercedes-Benz showcase (no DOM access, so it can be unit tested).
// Data is illustrative: approximate figures for a class project.
const CARS = [
  { name: "A-Class",   type: "Hatchback", hp: 163, price: 38000 },
  { name: "C-Class",   type: "Sedan",     hp: 255, price: 47000 },
  { name: "E-Class",   type: "Sedan",     hp: 255, price: 62000 },
  { name: "S-Class",   type: "Sedan",     hp: 429, price: 120000 },
  { name: "GLC",       type: "SUV",       hp: 255, price: 51000 },
  { name: "G-Class",   type: "SUV",       hp: 416, price: 140000 },
  { name: "EQS",       type: "Electric",  hp: 516, price: 105000 },
  { name: "AMG GT",    type: "Coupe",     hp: 577, price: 140000 },
];

function filterByType(cars, type) {
  if (!type || type === "All") return cars.slice();
  return cars.filter((car) => car.type === type);
}

function sortByPower(cars) {
  return cars.slice().sort((a, b) => b.hp - a.hp);
}

function formatPrice(price) {
  return "$" + Number(price).toLocaleString("en-US");
}

function hpToKw(hp) {
  return Math.round(hp * 0.7457);
}

if (typeof module !== "undefined") {
  module.exports = { CARS, filterByType, sortByPower, formatPrice, hpToKw };
}
