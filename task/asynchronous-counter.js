var counter = 1;

function addCounter() {
	console.log(counter++);
}

var counterPromise = setInterval(function() {
	if (counter >= 5) {
		clearInterval(counterPromise)
	}

	addCounter();
}, 1000);
