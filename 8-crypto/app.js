'use strict'

const passwords =`gemini`;
function crypto (password){
  const cryproPath = password.replace(/i/i,`rtd`);
  return cryproPath
}
function check (crypto,currect){
    if (currect === `gemini`){
      const currectPas =  crypto.replace(/rtd/i,`i`)
      if(currectPas === currect) {
return true
      }
    }
    else {
        return false
    }
}
crypto(passwords)
console.log (check(crypto(passwords),passwords))