var heading = "Hello World";

console.log(heading.toUpperCase());

console.log(heading.substr(0, 5));

console.log("Hello" + "World");

var fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
console.log(fruits.length);

fruits.push("Tomato")
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

