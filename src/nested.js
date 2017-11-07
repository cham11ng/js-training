function initData(_name, _author) {
	var data = {
		name: _name,
		author: _author
	};

	return function() {
		return data;
	}
}

var getData = initData("ng-book", "Ari Lerner");
console.log(getData());
