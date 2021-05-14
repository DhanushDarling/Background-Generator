var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector(".gradient");
var input = document.querySelector(".input");

function changeInputColor(){
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
	console.log(colorl.value);
	console.log(color2.value)
}
function addListElement(){
	var list = document.creatTextNode(input.value);
	
	body
}

body.addEventListener("input",changeInputColor);

