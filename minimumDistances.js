// https://www.hackerrank.com/challenges/minimum-distances/problem

function minimumDistances(a) {
  let minDistance = a.length;
  let flag = -1;
  for(let i=0; i< a.length; i++){
    let first = a.indexOf(a[i]);
    let last = a.lastIndexOf(a[i]);
    if(first === last){
      continue;
    }else{
      flag = 1;
      let distance = Math.abs(first - last)
      if(distance < minDistance){
        minDistance = distance;
      }
    }
  }
  if(flag == -1){
    return -1;
  }

  return minDistance;
}