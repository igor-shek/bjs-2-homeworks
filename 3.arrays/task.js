function compareArrays(arr1, arr2) {
  return (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length && arr1.every((item, idx) => item === arr2[idx])) == true;
}

function advancedFilter(arr) {
  return arr.filter((item) => item >= 0 && item % 3 === 0).map((item) => item * 10);
}