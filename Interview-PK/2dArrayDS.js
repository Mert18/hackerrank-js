// https://www.hackerrank.com/challenges/2d-array/problem>

function hourglassSum(arr) {
  const allSums = [];
  for (let i = 1; i < arr.length - 1; i++) {
    for (let y = 1; y < arr[i].length - 1; y++) {
      let sum =
        arr[i][y] +
        arr[i - 1][y] +
        arr[i - 1][y - 1] +
        arr[i - 1][y + 1] +
        arr[i + 1][y] +
        arr[i + 1][y - 1] +
        arr[i + 1][y + 1];
      allSums.push(sum);
    }
  }

  return allSums.sort((a, b) => b - a)[0];
}
