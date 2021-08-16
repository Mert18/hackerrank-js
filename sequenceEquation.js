// https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) {
  
  let resultArr= [];

  for(let i=1; i <= p.length; i++){
    let index = p.indexOf(i) +1;
    let newPlace = p.indexOf(index) + 1;
    resultArr.push(newPlace);
  }

  return resultArr;
}