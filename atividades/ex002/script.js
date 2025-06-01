let result = document.getElementById('result');
let result2 = document.getElementById('result2');

    document.getElementById('button').addEventListener('click', function() {
    let name = document.getElementById('name').value;
    let weigth = parseFloat(document.getElementById('weigth').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(weigth) || isNaN(height)) {
        result.innerText = "Please enter valid numbers.";
        return;
    }

    height = height / 100;
    let bmi = weigth / (height * height);
    result.innerText = "Your BMI is: " + bmi.toFixed(2);

    if (bmi < 16.00) {
        result2.innerText = "Hey " + name + " You're Low Weigth: too dangerous!"
    } else if (bmi >= 16.00 && bmi < 16.99) {
        result2.innerText = "Hey " + name + "  You're Low Weigth: dangerous!"
    } else if (bmi >= 16.99 && bmi < 18.49) {
        result2.innerText = "Hey " + name + " You're Low Weigth"
    } else if (bmi >= 18.49 && bmi < 24.99) {
        result2.innerText = "Hey " + name + " You're Normal Weigth"
    } else if (bmi >= 24.99 && bmi < 29.99) {
        result2.innerText = "Hey " + name + " High Weigth"
    } else if (bmi >= 29.99 && bmi < 34.99) {
        result2.innerText = "Hey " + name + " Obesity I"
    } else if (bmi >= 34.99 && bmi < 39.99) {
        result2.innerText = "Hey " + name + " Obesity II"
    } else{
        result2.innerText = "Hey " + name + " Obesity III"
    }
});