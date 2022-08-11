// Counter One
let count = 0;
let countEl = document.getElementById("count-el");

function incOne() {
  count += 1;
  countEl.textContent = count;
}

function incTwo() {
  count += 2;
  countEl.textContent = count;
}
function incThree() {
  count += 3;
  countEl.textContent = count;
}

// Counter Two
let count2 = 0;
let countEl2 = document.getElementById("count-el2");

function incOne2() {
  count2 += 1;
  countEl2.textContent = count2;
}
function incTwo2() {
  count2 += 2;
  countEl2.textContent = count2;
}
function incThree2() {
  count2 += 3;
  countEl2.textContent = count2;
}

// Reset Button
function resetBtn() {
  count = 0;
  count2 = 0;
  countEl.textContent = 0;
  countEl2.textContent = 0;
}
