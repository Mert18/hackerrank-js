// https://www.hackerrank.com/challenges/save-the-prisoner/problem

function saveThePrisoner(n, m, s) {
  let candlesLeftAfterFirstTour =  m - ((n - s) + 1);

  if(candlesLeftAfterFirstTour < 0){
    return n - Math.abs(candlesLeftAfterFirstTour);
  }else if(candlesLeftAfterFirstTour % n === 0){
    return n;
  }else {
    return candlesLeftAfterFirstTour % n;
  }
}