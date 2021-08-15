// https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
  let peopleShared = 5;
  let peopleLiked = 0;
  let sumLike = 0
  for(let i=0; i< n; i++){
    peopleLiked = Math.floor(peopleShared/2);
    sumLike += peopleLiked;
    peopleShared = peopleLiked*3;
  }
  return sumLike;
}
