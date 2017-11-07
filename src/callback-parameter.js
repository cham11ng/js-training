function getData(onSuccess) {
	var data = {
		name: "ng-book",
		author: "Ari Lerner"
	};

	onSuccess(data);
}

getData(function(book) {
	console.log(book);
});
