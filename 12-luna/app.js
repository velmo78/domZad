'use strict'

const card = "4532-0151-1283-0366";

function luna(card){
  let sum = 0 ;
  const half = 0;
   card =  card.trim();
   card =  card.replaceAll(`-`,``);
  if(card.length != 16){
    return false
  };
  
  for (let i = 0; i<card.length; i++){
    let pro = Number(card[i]);
    if (i % 2 === half){
      pro *= 2;
      if (pro > 9){
         pro -= 9;
      }
    }
    sum += pro
  }
  return  sum % 10 === 0
}


console.log(luna(card))






