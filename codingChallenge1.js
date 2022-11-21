1 /*coding challenge
 */

const ronyWeight = 60; // kg
const johnWeight = 68; // kg
const ronyHeight = 1.76; // meter
const johnHeight = 1.81; // meter
let ronyIbm; let johnIbm; let isRonyIbmHigher; let 
output;

const ibmMethods = {
  calcBMI(weight, height) {
    return weight / (height * height);
  },
  compareIbm(ibm1, ibm2) {
    return ibm1 > ibm2;
  },
};

ronyIbm = ibmMethods.calcBMI(ronyWeight, ronyHeight);
johnIbm = ibmMethods.calcBMI(johnWeight, johnHeight);
isRonyIbmHigher = ibmMethods.compareIbm(ronyIbm, johnIbm);
output = `Is Rony's IBM higher than John's? ${isRonyIbmHigher}`;
console.log(ronyIbm, johnIbm);
console.log(output);