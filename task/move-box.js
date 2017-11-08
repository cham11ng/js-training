function Box() {
	this.x = 0;
	this.y = 0;
	this.dx = 0;
	this.dy = 0;
	this.height = 0;
	this.width = 0;
	this.xdirection = 1;
	this.ydirection = 1;
	this.areaHeight = 0;
	this.areaWidth = 0;
	this.element = "";

	var that = this;

	this.init = function(props) {
		this.x = props.x;
		this.y = props.y;
		this.dx = props.dx;
		this.dy = props.dy;
		this.height = props.height;
		this.width = props.width;
		this.areaHeight = props.areaHeight;
		this.areaWidth = props.areaWidth;
		this.element = props.element;
	}
	
	var setElementPosition = function() {
		that.element.style.left = that.x + "px";
		that.element.style.top = that.y + "px";
	}

	var toggleDirection = function() {}

	this.updatePosition = function() {
		if (this.x >= (this.areaWidth - this.width)) {
			this.xdirection = -1;
		} else if (this.x <= 0) {
			this.xdirection = 1;
		}

		if (this.y >= (this.areaHeight - this.height)) {
			this.ydirection = -1;
		} else if (this.y <= 0) {
			this.ydirection = 1;
		}

		that.x += that.dx * this.xdirection;
		that.y += that.dy * this.ydirection;
		setElementPosition();
	}

	var up = function() {
		if (that.y > 0) {
			that.y -= that.dy;
		}	
	}

	var right = function() {
		if (that.x < (that.areaWidth - that.width)) {
			that.x += that.dx;
		}
	}

	var down = function() {
		if (that.y < (that.areaHeight - that.height)) {
			that.y += that.dy;
		}
	}

	var left = function() {
		if (that.x > 0) {
			that.x -= that.dx;
		}
	}

	this.move = function(direction) {
		switch(direction) {
			case 'up':
				up();
				break;

			case 'right':
				right();
				break;

			case 'down':
				down();
				break;

			case 'left':
				left();
				break;

			default:
				console.log('Invalid Move');
		}
		setElementPosition();
	}
}

var containerHeight = 300;
var containerWidth = 300;
var boxHeight = 20;
var boxWidth = 20

wrapper = document.getElementById("wrapper");
container = document.createElement("div");
wrapper.appendChild(container);
container.style.height = containerHeight + "px";
container.style.width = containerWidth + "px";
container.style.margin = "0 auto";
container.style.position = "relative";
container.style.backgroundColor = "silver";

boxElement = document.createElement("div");
container.appendChild(boxElement);
boxElement.style.backgroundColor = "blue";
boxElement.style.height = boxHeight + "px";
boxElement.style.width = boxWidth + "px";
boxElement.style.position = "absolute";

var box = new Box();
box.init({
	x: 0,
	y: 0,
	dx: 5,
	dy: 5,
	height: boxHeight,
	width: boxWidth,
	areaHeight: containerHeight,
	areaWidth: containerWidth,
	element: boxElement
});

document.onkeydown = function(event) {
	switch(event.keyCode) {
		case 38:
			box.move('up');
			break;

		case 39:
			box.move('right');
			break;

		case 40: 
			box.move('down');
			break;

		case 37:
			box.move('left');
			break;

		default:
			console.log("Invalid Move");
	}
};

setInterval(function() {
	box.updatePosition();
}, 50);
