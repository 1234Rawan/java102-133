//task1
// let myNumbers = [1, 2, 3, 4, 5];
// let [a, , , , e] = myNumbers
// console.log(a * e);
//task2
// let mySkills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     ["PHP", "Python", ["Django", "Laravel"]],
//     ];
//     // Write Your Destructuring Assignment Here
//     let [a, b, c, [d, e, [f, g]]] = mySkills;
//     console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
//task4
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};
// Write Your Destructuring Assignment Here
({ age: a, w } = member);
console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working
({ country: c } = member);
console.log(`I Live in ${c}`);
// I Live in Egypt
({
    hobbies: [h1, , h3],
} = member);
console.log(`My Hobbies: ${h1} And ${h3}`);