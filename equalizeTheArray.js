// https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
  let mostFrequent = 0;
  let numberof = 0;

  for (let i = 0; i < arr.length; i++) {
    numberof = arr.filter((el) => el === arr[i]).length;
    if (numberof > mostFrequent) {
      mostFrequent = numberof;
    }
  }

  return arr.length - mostFrequent;
}
