function testSort(sortFunction, n = 100) {
  for (let i = 0; i < n; i++) {
    const a = Array(10)
      .fill(0)
      .map(() => Math.floor(Math.random() * 100 - 50));

    const testCase = [...a];

    if (!sortFunction(a).toString() === a.sort((a, b) => a - b).toString()) {
      const e = new Error('Error! Test case: ' + a.join(' '));
      console.log(e);
    }
  }

  console.log('ok');
  return 'ok';
}
