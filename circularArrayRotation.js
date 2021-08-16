// https://www.hackerrank.com/challenges/circular-array-rotation/problem

function circularArrayRotation(a, k, queries) {
  let remaining = k % a.length;

  for(let i=0; i<remaining; i++){
    a.unshift(a.pop());
  }

  let resultArr = [];

  for(let x=0; x< queries.length; x++){
    resultArr.push(a[queries[x]]);
  }

  return resultArr;
}