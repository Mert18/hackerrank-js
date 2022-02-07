function flatlandSpaceStations(n, c) {
  // External distance
  let furtherDistance = 0;

  for(let i=0; i< n; i++){
    // Internal distance, initially taken the greater value it can be.(10^5 cities)
    let nearestofmine = 100000;
    // So for every city that has an space station, we calculate their distances relative to the current one (we are inside a for loop that loops through every city)
    c.map((value) => {
      // We find the nearest distance between the current city and the nearest space station
      let distance = Math.abs(i - value);
      if(distance < nearestofmine){
        nearestofmine = distance;
      }
    })

    // We check that nearest space station's distance greater than the current one, if it is, replace.
    if(nearestofmine > furtherDistance){
        furtherDistance = nearestofmine;
      }
  }
  // Viola!
  return furtherDistance;
}