// https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
    let count = 0;
    let myArr = n.toString().split("");

    for(let i=0; i< myArr.length; i++){
      if(n % myArr[i] === 0){
        count++
      }
    }

    return count;
}