'use strict'
function calc(opera){
  const num1 = Number(document.querySelector(`.first-num`).value);
  const num2 = Number(document.querySelector(`.second-num`).value);
  if (opera == `/`&& num2 === 0 || opera == `/`&& num1 === 0){
    document.querySelectorAll(`input`).forEach(input => input.value = ``)
    return console.log (`Делить нельзя`)
    
  }
  if (!num1 || !num2){
    return false
  }
  let result = 0;
  switch (opera){
    case `+`: result = num1 + num2; 
    break;
    case `-`: result = num1 - num2;
    break;
    case `*`: result = num1 * num2;
    break;
    case `/`: result =  num1 / num2;
  };
  document.querySelector(`.answer`).innerText = `Ответ: ${result}`
  document.querySelectorAll(`input`).forEach(input => input.value = ``);
}


