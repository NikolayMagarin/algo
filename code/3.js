const insertionSort = (array) => {
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }

  return arr;
};

const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index1 - 1] = temp;
};
