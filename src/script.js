var heading = "Hello World";

console.log(heading.toUpperCase());

console.log(heading.substr(0, 5));

console.log("Hello" + "World");

var fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
console.log(fruits.length);

fruits.push("Tomato");
console.log(fruits);

var person = {
	name: "Tylor",
	age: 43
};

console.log(person.name);
var keyName = "age";
console.log(person[keyName]);

person.name = "John";
console.log(person.name);
person[keyName] = 30;
console.log(person[keyName]);

var x = 4;
switch (x) {
	case 4:
		console.log("value is 4");
		break;

	case 2:
		console.log("value is 2");
		break

	default:
		console.log("value is something else");
}

var objectKeys = Object.keys(person);

for (var i = 0; i < objectKeys.length; i++) {
	var key = objectKeys[i];
	console.log(key, person[key]);
}

function getSum(number1, number2) {
	return number1 + number2;
}
console.log("Normal: "+ getSum(3, 4));

// Function as variable
var addNumber = function(number1, number2) {
	return number1 + number2;
}
console.log("Variable Function: " + addNumber(1, 2));

// Function as object
var book = {
	name: "ng-book",
	author: "Ari Lerner",
	printData: function() {
		console.log("Book Name: ", this.name);
		console.log("Author: ", this.author);
	}
};

book.printData();

