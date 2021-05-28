// Задание 1
function getArrayParams(arr) {
  let min = 101;
  let max = -101;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  avg = (sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = arr.reduce((acc, item) => acc + item, 0);

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -1000000000000;

  for (let i = 0; i < arrOfArr.length; i++) {
    let sumOfArrInside = func(arrOfArr[i]);

    if (sumOfArrInside > max) {
      max = sumOfArrInside;
    }
  }

  return max
}