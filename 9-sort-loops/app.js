'use strict'
function sort (order){
const arr =[1, 40, -5, 10, 0];
for (let i= 0; i<arr.length; i++){
    for (let j= 0; j<arr.length; j++){
        if ((order ===`asс` && arr[i] < arr[j]) ||
            (order ===`desс` && arr[i] > arr[j])
         ){
        let first = arr[i];
        arr[i] = arr[j];
        arr[j] = first;
        }
    }
}
return arr
}
console.log (sort(`desс`))