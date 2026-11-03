// Browser code: renders the car list using the logic from cars.js
const typeSelect = document.getElementById("type");
const sortBox = document.getElementById("sort");
const list = document.getElementById("cars");

const types = ["All", ...new Set(CARS.map((c) => c.type))];
typeSelect.innerHTML = types.map((t) => `<option>${t}</option>`).join("");

function render() {
  let cars = filterByType(CARS, typeSelect.value);
  if (sortBox.checked) cars = sortByPower(cars);
  list.innerHTML = cars
    .map(
      (c) => `<li>
        <h2>${c.name}</h2>
        <p class="type">${c.type}</p>
        <p>${c.hp} hp (${hpToKw(c.hp)} kW)</p>
        <p class="price">from ${formatPrice(c.price)}</p>
      </li>`
    )
    .join("");
}

typeSelect.addEventListener("change", render);
sortBox.addEventListener("change", render);
render();
