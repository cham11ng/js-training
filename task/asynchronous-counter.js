var x = 1;

function addCounter() {
	console.log(x++);
}

setInterval(function() {
	addCounter();
}, 2000);
