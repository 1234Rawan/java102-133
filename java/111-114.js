// //task1
// let fonts = document.querySelector(".fonts");
// let colors = document.querySelector(".colors");
// let size = document.querySelector(".font-size");
// if (window.localStorage.length > 0) {
// document.body.style.fontFamily =
// window.localStorage.getItem("fontFamily");
// }
// if (window.localStorage.length > 0) {
// document.body.style.color = window.localStorage.getItem("color");
// }
// if (window.localStorage.length > 0) {
// document.body.style.fontSize =
// window.localStorage.getItem("fontSize");
// }
// fonts.addEventListener("change", () => {
// window.localStorage.setItem("fontFamily", fonts.value);
// document.body.style.fontFamily = fonts.value;
// });
// colors.addEventListener("change", () => {
// window.localStorage.setItem("color", colors.value);
// document.body.style.color = colors.value;
// });

// size.addEventListener("change", () => {
// window.localStorage.setItem("fontSize", size.value);
// document.body.style.fontSize = size.value;
// });
//task2
let theName = document.querySelector(".name");
let theEmail = document.querySelector(".email");
let theNumber = document.querySelector(".number");
let colors = document.querySelector(".colors");
if ((window.sessionStorage = window.sessionStorage.getItem("autoSave-Name"))) {
theName.value = window.sessionStorage.getItem("autoSave-Name", theName.value);
}
if ((window.sessionStorage = window.sessionStorage.getItem("autoSave-Email"))) {
theEmail.value = window.sessionStorage.getItem(
"autoSave-Email",
theEmail.value
);
}
if (
(window.sessionStorage = window.sessionStorage.getItem("autoSave-Number"))
) {
theNumber.value = window.sessionStorage.getItem(
"autoSave-Number",
theNumber.value
);
}
if ((window.sessionStorage = window.sessionStorage.getItem("color"))) {
colors.value = window.sessionStorage.getItem("color", colors.value);
}
theName.addEventListener("input", () => {
window.sessionStorage.setItem("autoSave-Name", theName.value);
});
theEmail.addEventListener("input", () => {
window.sessionStorage.setItem("autoSave-Email", theEmail.value);
});
theNumber.addEventListener("input", () => {
window.sessionStorage.setItem("autoSave-Number", theNumber.value);
});
colors.onchange = () => {
window.sessionStorage.setItem("color", colors.value);
};