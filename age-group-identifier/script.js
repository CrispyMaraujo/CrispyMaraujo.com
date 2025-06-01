let age = window.document.getElementById('age').value;
let result = window.document.getElementById("result");
age = parseInt(age);
let button = window.document.getElementById('button').addEventListener('click', click);

function click() {
    let age = parseInt(document.getElementById('age').value);
    let result = document.getElementById('result');
if (age >= 0 && age <= 14) {
    result.innerText = "You are a child."
} else if (age >=15 && age <= 30) {
    result.innerText = "You are a teenager"
} else if (age >= 30 && age <= 59) {
    result.innerText = "You are an adult"
} else if (age >= 60 && age <= 110) {
    result.innerText = "You are a old one, danm!!!!!"
} else if (age < 0) {
    result.innerText = "That's not a valid age!"
} else {
    result.innerText = "You are sure??? I'm sorry! You were supposed to be buried!"
}}