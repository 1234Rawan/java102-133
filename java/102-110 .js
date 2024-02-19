//task1
let promptNum = prompt("Print Numbers From - To", "Example 5 - 20");
let counter = promptNum.split("-").sort();
let count = setInterval(() => {
let myDiv = document.createElement("div");
myDiv.innerHTML = counter[0]++;
if (myDiv.innerHTML === counter[1]) {
clearInterval(count);
}
document.body.appendChild(myDiv);
}, 0);
//task2
let div = document.createElement("div");
let heading = document.createElement("h1");
let msg = document.createElement("p");
let button = document.createElement("button");
let headingText = document.createTextNode("Welcome");
heading.appendChild(headingText);
let msgText = document.createTextNode("Welcome To Elzero Web School");
msg.appendChild(msgText);
let buttonSign = document.createTextNode("X");
button.appendChild(buttonSign);
div.appendChild(heading);
div.appendChild(msg);
div.appendChild(button);
//task3
let downCount = document.querySelector("div");
let cnt = setInterval(() => {
downCount.innerHTML -= 1;
if (downCount.innerHTML === "0") {
clearInterval(cnt);
}
}, 1000);
//task4
let urlChange = document.querySelector("div");
setInterval(() => {
urlChange.innerHTML -= 1;
if (urlChange.innerHTML === "0") {
window.location.assign("https://elzero.org/");
}
}, 1000);
//task5
let openURL = document.querySelector("div");
let ct = setInterval(() => {
openURL.innerHTML -= 1;
if (openURL.innerHTML === "5") {
window.open(
"https://Elzero.org",
"_blank",
"width= 400, height= 400, left= 300, top = 100"
);
} else if (openURL.innerHTML === "0") {
clearInterval(ct);
}
}, 1000);