var person = {
	firstName: "Sagar",
	lastName: "Chamling",
	getFullName: function () {
		console.log(this.firstName + ' ' + this.lastName);
	}
}

person.getFullName();
