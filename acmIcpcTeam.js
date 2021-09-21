// https://www.hackerrank.com/challenges/acm-icpc-team/problem

function acmTeam(topic) {
  const teamknows = [];

  const toReturn = [];

  for(let i=0; i<topic.length-1; i++){
    for(let y=i+1; y<topic.length; y++){
      let maxknows = topic[i].length;
      for(let x=0; x< topic[i].length; x++){
        if(topic[i][x] == 0 && topic[y][x] == 0){
          maxknows -=1;
        }
      }
      teamknows.push(maxknows)
    }
  }

  
  let max = teamknows.sort((a,b) => b-a)[0];
  let not = teamknows.filter((el) => el=== teamknows[0]).length;

  toReturn.push(max);
  toReturn.push(not);

  return toReturn;
  
}