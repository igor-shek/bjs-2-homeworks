'use strict';

function solveEquation(a, b, c) {
  const D = b ** 2 - 4 * a * c;

  if (D === 0) {
    return [(-b + Math.sqrt(D)) / 2 * a];
  } else if (D > 0) {
    return [(-b + Math.sqrt(D)) / 2 * a, (-b - Math.sqrt(D)) / 2 * a];
  } else {
    return [];
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  function checkType() {
    let parameters = [percent, contribution, amount];

    const parameterName = ['Процентная ставка', 'Начальный взнос', 'Общая стоимость'];

    for (let i = 0; i < parameters.length; i++) {
      if (Number.isNaN(parameters[i]) === true) {
        alert('Параметр ' + parameterName[i] + ' содержит неправильное значение ' + parameters[i] + '.');
      }
    }
  }

  checkType();

  const loanBody = +amount - Number(contribution);

  const creditPeriod = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth();

  const monthPercent = Number(percent) / 12 / 100;

  const paymentPerMonth = loanBody * (monthPercent + monthPercent / (((1 + monthPercent) ** creditPeriod) - 1));

  const totalAmount = Number((paymentPerMonth * creditPeriod).toFixed(2));

  return totalAmount;
}