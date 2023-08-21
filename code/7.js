const primeNumbers = (n) => {
  const arr = Array(n)
    .fill(0)
    .map((_, i) => i + 1);

  arr[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      for (let j = i + arr[i]; j < arr.length; j += arr[i]) {
        arr[j] = 0;
      }
    }
  }

  return arr.filter((v) => v);
};

console.log(primeNumbers(11));
