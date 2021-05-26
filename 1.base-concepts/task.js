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
  const parameterName = ['Процентная ставка', 'Начальный взнос', 'Общая стоимость'];

  if (isNaN(percent) === true || percent === '' || percent === ' ') {
    return `Параметр "${parameterName[0]}" содержит неправильное значение "${percent}".`;
  } else if (isNaN(contribution) === true || contribution === '' || contribution === ' ') {
    return `Параметр "${parameterName[1]}" содержит неправильное значение "${contribution}".`;
  } else if (isNaN(amount) === true || amount === '' || amount === ' ') {
    return `Параметр "${parameterName[2]}" содержит неправильное значение "${amount}".`;
  } else {
    const loanBody = +amount - Number(contribution);

    const creditPeriod = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth();

    const monthPercent = Number(percent) / 12 / 100;

    const paymentPerMonth = loanBody * (monthPercent + monthPercent / (((1 + monthPercent) ** creditPeriod) - 1));

    const totalAmount = Number((paymentPerMonth * creditPeriod).toFixed(2));

    return totalAmount;
  }
}