function setup() {
    createCanvas(600, 600);
    background(" Whithe");
  } 
  
  function draw() {
    
    stroke("pink");
    fill("purple");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 45);
    }
   }
  