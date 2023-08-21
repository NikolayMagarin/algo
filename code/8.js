const binSearch = (arr = [], target) => {
  let left = 0;
  let right = arr.length - 1;

  let mid = Math.floor((left + right) / 2);

  debugger;

  while (left < mid) {
    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }

    mid = Math.floor((left + right) / 2);
  }

  if (arr[left] === target) {
    return left;
  } else if (arr[right] === target) {
    return right;
  } else {
    return -1;
  }
};
