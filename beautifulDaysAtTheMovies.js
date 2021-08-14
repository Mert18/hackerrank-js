function beautifulDays(i, j, k) {
  let count = 0;
  for(let x=i; x<=j; x++){
    if(Math.abs(x - reverseIt(x)) % k === 0){
      count++;
    }
  }
  return count;
}
function reverseIt(n){
  let str = n.toString().split("");
  return parseInt(str.reverse().join(""));
}