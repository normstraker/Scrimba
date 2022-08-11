let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  // invoked by click
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

console.log("Let's count the people on the train!");

// ==========================
// ==========================
// Practice for Scrimba below
// ==========================
// ==========================

// Exercise
// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

// let myPoints = 3;
// function add3Points() {
//   myPoints += 3;
// }

// function remove1Point() {
//   myPoints -= 1;
// }
// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();

// console.log(myPoints);

// ====================================

// Exercise
// Try to predict what each of the lines will log out
// console.log("2" + 2); // "22"
// console.log(11 + 7); // 18
// console.log(6 + "5"); // "65"
// console.log("My points: " + 5 + 9); // "My points: 59"
// console.log(2 + 2); // 4
// console.log("11" + "14"); // "1114"

// ====================================

// Exercise
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// let errorParagraph = document.getElementById("error"); // html element (id="error")

// added onclick="purchase()" to button element in html
// function purchase() {
//   errorParagraph.textContent = "Something went wrong, please try again";
// }

// ====================================

// Exercise
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;
// let sumEl = document.getElementById("sum-el");

// function add() {
//   let result = num1 + num2;
//   sumEl.textContent = "Sum: " + result;
// }

// function subtract() {
//   let result = num1 - num2;
//   sumEl.textContent = "Sum: " + result;
// }

// function divide() {
//   let result = num1 / num2;
//   sumEl.textContent = "Sum: " + result;
// }

// function multiply() {
//   let result = num1 * num2;
//   sumEl.textContent = "Sum: " + result;
// }

// ====================================
