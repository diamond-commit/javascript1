const Purple = document.getElementById("Purple");
const Red = document.getElementById("Red");
const Blue = document.getElementById("Blue");
const Green = document.getElementById("Green");
const Default = document.getElementById("Default");
const header = document.getElementById("header");
const historyContainer = document.getElementById("historybutton");
const block = document.createElement("div");

let colorList = [];

header.addEventListener("mouseenter", function() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  header.style.color = `rgb(${red},${blue},${green})`;
});

function changeBackground(colour) {
  document.body.style.backgroundColor = colour;
  
  const li = document.createElement("li");
  li.textContent = colour; // Display the selected color in the history
  
  colorList.push(li); // Add the new color to the end
}

Default.addEventListener("click", function() {
  changeBackground("black");
  Default.style.transform = "scale(1.15)";
  Default.style.backgroundColor = "black";
});
Red.addEventListener("click", function() {
  changeBackground("red");
  Red.style.transform = "scale(1.2)";
  Red.style.backgroundColor = "red";
});
Purple.addEventListener("click", function() {
  changeBackground("purple");
  Purple.style.transform = "scale(1.15)";
  Purple.style.backgroundColor = "purple";
});
Green.addEventListener("click", function() {
  changeBackground("green");
  Green.style.transform = "scale(1.15)";
  Green.style.backgroundColor = "green";
});
Blue.addEventListener("click", function() {
  changeBackground("blue");
  Blue.style.transform = "scale(1.15)";
  Blue.style.backgroundColor = "blue";
});

historyContainer.addEventListener("click", function() {
  block.style.width = "150px";
  block.style.height = "auto"; // Allow height to grow as needed
  historyContainer.style.backgroundColor = "transparent";
  block.style.fontStyle = "italic";
  block.style.color = "white"
  // Append color history items to the block
  colorList.forEach(item => {
    block.appendChild(item);
  });

  // Append the block to the history container to make it visible
  historyContainer.appendChild(block);
});
