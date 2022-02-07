function workbook(n, k, arr) {
  let pageNumber=1;
  let specialQuestionCounter=0;
  arr.map((section) => {
    // i is the problem number counter for each chapter.
    for(let i=1; i <= section; i++){
      // Special problem checker
      if(i == pageNumber){
        specialQuestionCounter++;
      }
      // I already increase the page number after every chapter. So if it is the last problem of the chapter, I skip this increasing process here.
      if(i % k == 0 && i != section){
        pageNumber++;
      }
    }
    // End of the chapter, Increase page number
    pageNumber++;

  })
  return specialQuestionCounter;
}