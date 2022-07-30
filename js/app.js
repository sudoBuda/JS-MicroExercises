const firstExerciseText = "Hello World";
const firstContainer = document.getElementById("firstExercise");
const secondContainer = document.getElementById("secondExercise");
const thirdContainer = document.getElementById("thirdExercise");
const fourthConrainer = document.getElementById("fourthExercise");

function printResults(container, text) {
	container.innerHTML += text;
}
printResults(firstContainer, firstExerciseText);

const number1 = 3;
const number2 = 8;
function addition(container, n1, n2) {
	let total = n1 + n2;
	return printResults(container, total);
}
addition(secondContainer, number1, number2);

let takeName = window.prompt("¿Cuál es tu nombre?");
let greetingsMessage = `Hola ${takeName}`;
function printName(container, name) {
	return printResults(container, name);
}
printName(thirdContainer, greetingsMessage);

let num1 = parseInt(window.prompt("Vamos a sumar, introduce el primer numero"));
let num2 = parseInt(
	window.prompt("Vamos a sumar, introduce el segundo numero")
);
addition(fourthConrainer, num1, num2);
