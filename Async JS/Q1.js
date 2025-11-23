
function boilWater() {
  return new Promise((res, rej) => {
    setTimeout(() => Math.random() > 0.2 ? res("Water boiled") : rej("Boiling failed"), 1000);
  });
}
function brewCoffee() {
  return new Promise((res, rej) => {
    setTimeout(() => Math.random() > 0.2 ? res("Coffee brewed") : rej("Brewing failed"), 1200);
  });
}
function pourCoffee() {
  return new Promise((res, rej) => {
    setTimeout(() => Math.random() > 0.2 ? res("Poured") : rej("Pouring failed"), 1500);
  });
}
boilWater()
  .then(msg => brewCoffee())
  .then(msg => pourCoffee())
  .then(msg => console.log("Coffee ready for the team!"))
  .catch(err => console.log(err));
