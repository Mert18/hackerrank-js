// https://www.hackerrank.com/challenges/library-fine/problem

function libraryFine(d1, m1, y1, d2, m2, y2) {
  let fine = 0;

  if(y2 === y1 && m1 === m2){
    if(d1 > d2){
      fine = (d1 - d2) * 15
    }
  }

  else if(y2 === y1 && m1 > m2){
    fine = (m1 - m2) * 500
  }
  else if(y1 > y2){
    fine = 10000;
  }

  return fine;
}