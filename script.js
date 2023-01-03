var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.setAttribute('onclick', 'jobCompletionToggle(this)');
	li.appendChild(document.createTextNode(input.value));

	var but = document.createElement("button");
	but.setAttribute('onclick', 'itemRemoval(this)');
	but.setAttribute('class', 'buttonRed');
	but.appendChild(document.createTextNode("Remove"));

	li.appendChild(document.createTextNode(" "));
	li.appendChild(but);

	ul.appendChild(li);

	var br = document.createElement("br");
	ul.appendChild(br);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

/******************************************
 * NO NEED ANYMORE AFTER DELETE BUTTON CREATED
 * ****************************************
function jobCompletionToggle (el) {	
	if (el.hasAttribute('class')) {
		el.toggleAttribute("class");
	}
	else {
		el.setAttribute('class', 'done');
	}
}
*****************/

function itemRemoval(item){
		item.parentElement.nextSibling.remove();
		item.parentElement.remove();
		item.remove();
}
	
