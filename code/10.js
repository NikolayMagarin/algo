function permutations(array) {
  array = [...array];

  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return [array];
  }

  let result = [];

  for (let i = 0; i < array.length; i++) {
    swap(array, i, 0);
    const perms = permutations(array.slice(1));
    swap(array, i, 0);

    result = result.concat(perms.map((p) => [array[i], ...p]));
  }

  return result;
}

const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index1 - 1] = temp;
};
