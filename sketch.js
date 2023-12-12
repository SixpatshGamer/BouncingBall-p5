function setup() {
  createCanvas(400,400)
  background(255);
}

function draw() {
  loadPixels();
  let pd = pixelDensity();
//  text(pd,0,200);
  var count = 0;
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let pixIndex = 4 * pd * (y * pd * width + x * pd);
      if (pixels[pixIndex] == 0 && pixels[pixIndex + 1] == 0 && pixels[pixIndex + 2] == 0) {
        count++;
      } else {
        continue;
      }
    }
  }
  if (count == width*height) {
    background(5,200,120);
    textSize(60);
    text("Success!",75,200);
    noLoop();
    return;
  }
  if (mouseIsPressed) {
    fill(0);
    stroke(0);
  } else {
    fill(255);
  }
  ellipse(mouseX,mouseY,80,80);
}
