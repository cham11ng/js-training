function Pokemon() {
	// public variable
	this.name = "";
	this.health = 0;
	this.armor = 0;

	var self = this;
	console.log("Class", this);

	// private function
	var logProps = function() {
		console.log("Function", this);
		console.log(self.name, self.health, self.armor);
	}

	this.init = function(props) {
		this.name = props.name;
		this.health = props.health;
		this.armor = props.armor;
		logProps();
	};

	// public function
	this.printProps = function () {
		console.log(this.name, this.health, this.armor);
	}
}

var pikachu = new Pokemon();

pikachu.init({
	name: "Pikachu",
	health: 500,
	armor: 5
});

pikachu.printProps();
