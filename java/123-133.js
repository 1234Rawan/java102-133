//task1
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers][2]);
//task2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(Array.from(new Set(myFriends)).sort());
//task3
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
let myMap = new Map(Object.entries(myInfo));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));
//task4
let theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));
console.log(
    +[...new Set(Array.from(theNumber.toString(), (e) => (e > 0 ? e : "")))].join(
        ""
    )
);
//task5
let theName = "Elzero";
console.log(theName.split(""));
console.log(Array.from(theName));
console.log([...theName]);
let emptyArray = [];
for (let i = 0; i < theName.length; i++) {
emptyArray.push(theName[i]);
}
console.log(emptyArray);
console.log([...new Set(theName)]);
console.log(Object.assign([], theName))