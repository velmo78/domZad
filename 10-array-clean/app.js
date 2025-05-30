'use strict'
const arr =[1,2,3,4,5,6,15]
function remove(el){
    return el>5
    }

function filArr (arr,remove){
    const newArr = [];
for(let el of arr){
   if(remove(el) === false){
    newArr.push(el)
   }
}
return newArr
}


console.log(filArr(arr,remove))