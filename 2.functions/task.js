// Задание 1
function getArrayParams(arr) {
  let min = 101;
  let max = -101;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      console.log(`min = ${min}`);
    }

    if (arr[i] > max) {
      max = arr[i];
      console.log(`max = ${max}`);
    }

    sum += arr[i];
    console.log(`sum = ${sum}`);
  }

  avg = (sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код
  ß
  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...

  return max
}
