// make button and add it to the HTML page
const newButton = document.createElement('button');
newButton.innerHTML = 'Click For A Surprise';
document.body.appendChild(newButton);

// Using an array of colors
let colors = ["#CD5C5C", "#F08080",	"#FA8072", "#E9967A",	"#FFA07A",	"#DC143C", "#FF0000"];

function changeColor() {
  let colorCode = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[colorCode];

  let buttonCode = Math.floor(Math.random() * colors.length);
    newButton.style.background = colors[buttonCode];
}


newButton.addEventListener("click", changeColor);

/* Using all colors
function changeColors() {
  let backgroundNumber = 
  // Math.random gives you a number between 0 and 1, Math.floor rounds the number down to the nearest whole number
  // 16777215 is the highest RBG color, so you multiple the random number by that to give you a color code
  Math.floor(Math.random() * 16777215);
  // .toString makes the value a string (bc we are using string '#' and the random number)
  // .toString(16) converts the number to a hexadecmial value
  // toString method "converts an opject to a string"
  document.body.style.backgroundColor = 
    "#" + backgroundNumber.toString(16);

  // repeat but with the button to make the background a button both a random color
  let buttonNumber = Math.floor(Math.random() * 16777215);
  newButton.style.background = "#" + buttonNumber.toString(16);
}

// call function to change background and button upon click
newButton.addEventListener("click", changeColors) */