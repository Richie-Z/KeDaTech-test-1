const sortDescending = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const findMaxSubarray = (arr, windowsSize) => {
  if (windowsSize > arr.length) {
    return null;
  }
  let maxSum = 0;

  for (let i = 0; i < windowsSize; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;

  for (let i = windowsSize; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - windowsSize];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

const countEvenNumbers = (obj) => {
  let count = 0;

  for (let i in obj) {
    let value = obj[i];
    if (typeof value === 'object') {
      count += countEvenNumbers(value);
    }
    if (typeof value === 'number' && value % 2 === 0) {
      count += value;
    }
  }
  return count;
}

export { sortDescending, findMaxSubarray, countEvenNumbers };
