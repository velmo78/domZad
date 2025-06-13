'use strict'



const user = {
 search:`Вася`,
 take:10,
};

function toUrlString (obj) {
  const done = [];
 for (let key in obj){
  const value = obj[key]
  const first =`${key}=${value}`;
  done.push(first)
 }
 return done.join (`&`)
}


console.log(toUrlString(user))




