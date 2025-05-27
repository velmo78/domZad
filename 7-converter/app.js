'use strict'

function convert (sumForConvert,currency,targetCurr){
    if (currency === `$` && targetCurr === `rub`){
        const sumInrub = sumForConvert*79;
        return (`Ваш счет в рублях: ${sumInrub} ${targetCurr}`)

    }else if (currency === `rub` && targetCurr === `$`){
        const sumInUsd = sumForConvert/79;
        return (`Ваш счет в долларах: ${sumInUsd} ${targetCurr}`)

}
else if (currency === `rub` && targetCurr === `eur`){
    const sumInEur = sumForConvert/90;
    return (`Ваш счет в евро: ${sumInEur} ${targetCurr}`)
}
else if (currency === `eur` && targetCurr === `rub`){
    const sumInEur = sumForConvert*90;
    return (`Ваш счет в рублях: ${sumInEur} ${targetCurr}`)
}
else if (currency === `eur` && targetCurr === `$`){
    const sumEurToUsd = sumForConvert / 1.14;
    return (`Ваш счет в долларах : ${sumEurToUsd} ${targetCurr}`)
}
else if (currency === `$` && targetCurr === `eur`){
    const sumEurToUsd = sumForConvert * 1.14;
    return (`Ваш счет в евро : ${sumEurToUsd} ${targetCurr}`)
}else {
    return null
}
}
console.log (convert(100,`rub`,`eur`));
