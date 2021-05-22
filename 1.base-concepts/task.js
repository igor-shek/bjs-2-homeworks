"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;

  if (D === 0) {
    arr.push((-b + Math.sqrt(D)) / 2 * a);
    console.log(D);
  } else if (D > 0) {
    arr.push((-b + Math.sqrt(D)) / 2 * a);
    arr.push((-b - Math.sqrt(D)) / 2 * a);
    console.log(D);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
