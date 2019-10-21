var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement () {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var button2 = document.createElement("button");

    button.style.cssText = "font-size: 35px; border: 1px solid black";
    button2.appendChild(document.createTextNode(input.value));
    li.appendChild(button2);
    button2.onclick = deleteParent;

    var button2 = document.createElement("button");

    button2.appendChild(document.createTextNode("Remove!"));

    li.appendChild(button2);

    button2.onclick = removeParent;
}

function deleteParent(event) {
    event.target.parentNode.classList.toggle("done");
}

function removeParent(event2) {
    event2.target.parentNode.remove();
}

function addListElementAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

function addListElementAfterKey(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListElementAfterClick);

input.addEventListener("keypress", addListElementAfterKey);

var list = document.querySelectorAll("li");

for(var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", liClick); 
}

//function to add the 'line through' style
function liClick() {
    this.classList.toggle("done");
}
