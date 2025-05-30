'use strict'

const hasLicence = true;
const age = 19;
const IsDrunk = false;
const canDrive = (hasLicence && !IsDrunk) && (age>=18)
console.log (canDrive === true ? `Можно сесть за руль` : `Лучше сиди дома`)