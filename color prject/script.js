const Purple = document.getElementById("Purple");
    const Red = document.getElementById("Red");
    const Blue = document.getElementById("Blue");
    const Green = document.getElementById("Green");
    const Default = document.getElementById("Default")
   const header = document.getElementById("header")
   header.addEventListener("mouseenter", function() { 
    const red = Math.floor( Math.random() * 256)
    const blue = Math.floor( Math.random() *256)
    const green = Math.floor( Math.random() *256)
    header.style.color = `rgb(${red},${blue},${green})`
    
   })
    Purple.addEventListener("click", function() {
      document.body.style.backgroundColor = "purple";
    });

    Red.addEventListener("click", function() {
      document.body.style.backgroundColor = "red";
    });

    Blue.addEventListener("click", function() {
      document.body.style.backgroundColor = "blue";
    });

    Green.addEventListener("click", function() {
      document.body.style.backgroundColor = "green";
    });

    Default.addEventListener("click", function() {
      document.body.style.backgroundColor = "Black";
    });