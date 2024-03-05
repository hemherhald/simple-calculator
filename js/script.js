let x = 10
let y = 20
let z =x+y
console.log(z);

myName = prompt("Enter your name");
console.log("My name is " + myName);

// alert("My name is " + myName)

alert(`My name is ${myName}`);

calc = prompt(`
Simple Calculator: Choose a number below
            1) Addition
            2) Subtraction
            3) Division
            4) Multiplication
`);

alert("You selected option " + calc);

let num1 = parseInt(prompt("Enter the first number"));
let num2 = parseInt(prompt("Enter the second number"));

if(calc == 1){
    alert("Your result is " + parseInt(num1 + num2));
}
else if (calc == 2) {
    alert("You result is " + parseInt(num1 - num2));
}
else if (calc == 3) {
    alert("Your result is " + parseInt(num1/num2));
}
else if (calc) {
    alert("Your result is " + parseInt(num1 * num2));
}
else {
    alert("Invalid number selected");
}