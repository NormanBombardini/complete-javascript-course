// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow

// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

// 4. Bonus2:Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//   Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsAverage = (96 + 108 + 89) / 3;
const KoalasAverage = (88 + 91 + 110) / 3;

// const dolphinsAverage = (97 + 112 + 101) / 3;
// const KoalasAverage = (109 + 95 + 123) / 3;

// const dolphinsAverage = (97 + 112 + 101) / 3;
// const KoalasAverage = (109 + 95 + 106) / 3;

// const dolphinsAverage = (1 + 1 + 1) / 3;
// const KoalasAverage = (1 + 1 + 1) / 3;

if (dolphinsAverage > KoalasAverage && dolphinsAverage >= 100){
    console.log(`Congradulations to the Dolphins on beating the Koalas by ${dolphinsAverage-KoalasAverage} points!`);
} else if (KoalasAverage > dolphinsAverage && KoalasAverage >= 100){
    console.log(`Congradulations to the Koalas on beating the Dolphins by ${KoalasAverage-dolphinsAverage} points!`);
} else if (KoalasAverage === dolphinsAverage && dolphinsAverage >= 100 && KoalasAverage >= 100){
    console.log(`It was a draw!`);
} else if (dolphinsAverage > KoalasAverage && dolphinsAverage < 100){
    console.log(`The Dolphins won but did not get 100 points.`);
} else if (KoalasAverage > dolphinsAverage && KoalasAverage < 100){
    console.log(`The Dolphins won but did not get 100 points.`);
} else {
    console.log(`Nobody wins.`);
}

// console.log(`Dolphins average ${dolphinsAverage} and Koalas average ${KoalasAverage}.`)

// if (dolphinsAverage > KoalasAverage) {
//     console.log(`Congradulations to the Dolphins on beating the Koalas by ${dolphinsAverage-KoalasAverage} points!`);
// } else if (KoalasAverage > dolphinsAverage){
//     console.log(`Congradulations to the Koalas on beating the Dolphins by ${KoalasAverage-dolphinsAverage} points!`);
// } else if (KoalasAverage === dolphinsAverage){
//     console.log(`It was a tie!`);
// }