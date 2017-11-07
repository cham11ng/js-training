function changeBackgroundColor() {
	var colors = ["red", "blue", "silver", "green", "pink"];
	if (i < 4) {
		i++;
	}
	else {
		i = 0;
	}

	container.style.backgroundColor = colors[i];
	console.log(colors[i]);
}
var container = document.getElementById("container");
var button = document.getElementById("button");
var i = 0;


button.onclick = function() {
	changeBackgroundColor();
}

setInterval(function() {
	changeBackgroundColor();	
}, 1000);
