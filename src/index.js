var heading = document.getElementsByTagName("h1");
console.log(heading);

var menus = document.getElementsByClassName("active");
console.log(menus);

var copyright = document.createElement("div");
copyright.style.height = "50px";
copyright.value = "This is footer";
copyright.style.backgroundColor = "silver";

var bodies = document.getElementsByTagName("body");
bodies[0].appendChild(copyright);

setTimeout(function() {
	document.getElementById('main').removeChild(document.getElementById('container'));
}, 5000);
