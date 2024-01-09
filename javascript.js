// Function to change the background color of the body
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Function to increase or decrease the font size
function changeFontSize(change) {
  var currentFontSize = parseInt(document.body.style.fontSize) || 16;
  var newFontSize = currentFontSize + change;
  document.body.style.fontSize = newFontSize + "px";
}

// Function to increase or decrease the margin top of sections
function changeMarginTop(change) {
  var sections = document.querySelectorAll("section");
  sections.forEach(function (section) {
    var currentMarginTop = parseInt(section.style.marginTop) || 0;
    var newMarginTop = currentMarginTop + change;
    section.style.marginTop = newMarginTop + "px";
  });
}
// write a function to make links underlined and also make thw background color for link black

function underlineLinks() {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].style.textDecoration !== "underline") {
      links[i].style.textDecoration = "underline";
      links[i].style.backgroundColor = "black";
      links[i].style.color = "yellow";
    } else {
      links[i].style.textDecoration = "";
      links[i].style.backgroundColor = "";
      links[i].style.color = "";
    }
  }
}
