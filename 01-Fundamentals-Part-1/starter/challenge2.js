//Coding Challenge #1
/* Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉 GOOD LUCK 😀 */

//Test Data Set 1
let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.95;
let johnMass = 92;

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

if (markBMI > johnBMI){
    console.log(`Mark's BMI is ${markBMI}, which is ${markBMI-johnBMI} higher than John's (${johnBMI}).`);
} else {
    console.log(`John's's BMI is ${johnBMI}, which is ${johnBMI-markBMI} higher than Mark's (${markBMI}).`);
};

//Test Data Set 2
markHeight = 1.88;
markMass = 95;
johnHeight = 1.76;
johnMass = 85;

markBMI = markMass / (markHeight ** 2);
johnBMI = johnMass / (johnHeight ** 2);

if (markBMI > johnBMI){
    console.log(`Mark's second BMI is ${markBMI}, which is ${markBMI-johnBMI} higher than John's (${johnBMI}).`);
} else {
    console.log(`John's's second BMI is ${johnBMI}, which is ${johnBMI-markBMI} higher than Mark's (${markBMI}).`);
};