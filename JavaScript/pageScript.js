/* JavaScript RBTech Course */

// Messages
alert("Hello World! This is my first JS code!");
console.log("Escreve no console do browser")

/*
	Funções e variáveis utilizadas na pagina hello-world.html
*/

var count = 0;

function buttonCount() {
	count++;
	document.getElementById("count").innerHTML = count;
}

const buttonChange = document.querySelector("#buttonChange");
const buttonBack = document.querySelector("#buttonBack");

function changeColor(color) {
	const element = document.querySelector(".color");
	element.style.color = color;
}

buttonChange.addEventListener("click", () => {
	changeColor("red");
});
buttonBack.addEventListener("click", () => {
	changeColor("black");
});

/* Funções e variáveis de estudo */

var studentName = "Alison";
var age = 27;
var isStudent = true;
var courses = ["HTML", "CSS", "JS"]; // type: array
var student = { name: "Alison", age: age, isStudent: false }; // type: Object

console.log(studentName, isStudent);
console.log(courses);
console.log(courses[2], courses[3]); // courses[3] is a test for out of range

console.log(student);
console.log(student.name, student.isStudent);


function myFunction(num1, num2) {
	return num1 + num2;
}

var add = myFunction;
console.log("Resultado da soma: " + add(5, 4));

var person = {
	name: "Alison",
	lastName: "Viana",
	age: 27,
	courses: courses,
	getFullName: function() {
		return person.name + " " + person.lastName;
	}
}

var fullNameFunction = person.getFullName;
var fullName = person.getFullName();
var otherFullName = fullNameFunction();

console.log(fullName);
console.log(otherFullName);
console.log(person.courses.length);
console.log(person.courses.join('/'));

person.courses.push("Java");
console.log(person.courses.join('/'));
