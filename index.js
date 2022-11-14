const texts = ["PHOTOGRAPHER", "VLOGGER", "VIDEO EDITOR"];

var textNumber = 0;
var index = 0;
var letter = "";
var typer = document.querySelector('#typer');

(function type() {
    if(textNumber === texts.length) {
        textNumber = 0;
    }

    currentText = texts[textNumber];
    letter = currentText.slice(0, ++index);
    typer.textContent = letter;

    if(currentText.length === letter.length) {
        textNumber++;
        index = 0;
    }    
    setTimeout(type, 150);
})();

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}