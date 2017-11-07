function searchFruit(fruits, id) {
	for (var i = 0; i < fruits.length; i++) {
		if (fruits[i].id === id) {
			return fruits[i];
		}
	}
};

var fruits = [
	{
		id: 1,
		name: 'apple',
		color: 'red',
	},
	{
		id: 2,
		name: 'banana',
		color: 'yellow',
	}
];

console.log(searchFruit(fruits, 2));
