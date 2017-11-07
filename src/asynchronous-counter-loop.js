function counter() {
	i = 0;
	while (i < 10) {
		setTimeout(function() {
			console.log(i);
		}, 100);
		i++;
	}
};

counter();
