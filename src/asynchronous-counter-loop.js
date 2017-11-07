function addCount(value) {
	return function() {
		console.log(value);
	}
}

function counter() {
	i = 0;
	while (i < 10) {
		setTimeout(addCount(i), 100);
		i++;
	}
};

counter();
