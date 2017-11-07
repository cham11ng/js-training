console.log("from outside");

setTimeout(function() {
	console.log("I'm two second late.");
}, 2000);

setInterval(function() {
	console.log("I'm repeating");
}, 2000);
