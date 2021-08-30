//Coding Challenge #1
/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Createa Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:

§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

//Test Data Set 1
    let markHeight = 1.69;
    let markMass = 78;
    let johnHeight = 1.95;
    let johnMass = 92;

    let markBMI = markMass / (markHeight ** 2);
    let johnBMI = johnMass / (johnHeight ** 2);

    let markHigherBMI = markBMI > johnBMI;

    console.log("Mark's BMI 1: " + markBMI + " John's BMI 1: " + johnBMI);
    console.log(markHigherBMI);

//Test Data Set 2
    markHeight = 1.88;
    markMass = 95;
    johnHeight = 1.76;
    johnMass = 85;

    markBMI = markMass / (markHeight ** 2);
    johnBMI = johnMass / (johnHeight ** 2);

    markHigherBMI = markBMI > johnBMI;

    console.log("Mark's BMI 2: " + markBMI + " John's BMI 2: " + johnBMI);
    console.log(markHigherBMI);