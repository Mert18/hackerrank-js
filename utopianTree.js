
function utopianTree(n) {
  let height = 1;
  let spring = true;

  for(let i=0; i< n; i++){
    if(spring === true){
      height *=2;
    }else {
      height +=1;
    }
    spring = !spring;
  }

  return height;
}