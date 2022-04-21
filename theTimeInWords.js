function timeInWords(h, m) {
    
  let hash = new Object();
  hash[1] = 'one';
  hash[2] = 'two';
  hash[3] = 'three';
  hash[4] = 'four';
  hash[5] = 'five';
  hash[6] = 'six';
  hash[7] = 'seven';
  hash[8] = 'eight';
  hash[9] = 'nine';
  hash[10] = 'ten';
  hash[11] = 'eleven';
  hash[12] = 'twelve';
  hash[13] = 'thirteen';
  hash[14] = 'fourteen';
  hash[15] = 'fifteen';
  hash[16] = 'sixteen';
  hash[17] = 'seventeen';
  hash[18] = 'eighteen';
  hash[19] = 'nineteen';
  hash[20] = 'twenty';
  hash[21] = 'twenty one';
  hash[22] = 'twenty two';
  hash[23] = 'twenty three';
  hash[24] = 'twenty four';
  hash[25] = 'twenty five';
  hash[26] = 'twenty six';
  hash[27] = 'twenty seven';
  hash[28] = 'twenty eight';
  hash[29] = 'twenty nine';
  hash[30] = 'thirty';
    
    if(m == 0){
        return `${hash[h]} o' clock`
    }else{
        if(m < 30){
            if(m == 1){
                return `${hash[m]} minute past ${hash[h]}`
            }else if(m == 15){
              return `quarter past ${hash[h]}`
            }else {
                return `${hash[m]} minutes past ${hash[h]} `               
            }
        }else if(m > 30){
            if(m == 59){
                return `1 minute to ${hash[h+1]}`
            }else if(m == 45){
                return `quarter to ${hash[h+1]}`
            }
            else {
                return `${hash[60 - m]} minutes to ${hash[h+1]}`
            }
        }else {
            return `half past ${hash[h]}`
        }
    }
    
}
