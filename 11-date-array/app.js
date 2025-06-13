'use strict'

const data = [`30.12.1244`,`01/09/2024`,`05-09-2024`,`33.32.2021`]

function currectData (data){
    return data.filter(function (el){
        el = el.trim();
        el = el.replaceAll(`/`,`.`);
        el = el.replaceAll(`-`,`.`);
        if (el.length != 10){
        return false
        }
        let parts = el.split(`.`)
        if(parts.length !=3){
            return false
        }
        const day = Number(parts[0]);
        const month = Number(parts[1]);
        if ((day>0 && day<=31) && (month>0 && month<=12) && (parts[2].length === 4)){
            return true
        }
    }).map(function(el){
        el = el.replaceAll(`/`,`.`)
        el = el.replaceAll(`-`,`.`);
        return el
    })
}
console.log (currectData(data))












