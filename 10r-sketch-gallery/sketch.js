function setup() {
  let cvs = createCanvas(800, 500);
  cvs.parent("my-container");
  background(0);
}

function draw() {
  fill(random(255), random(255), random(255));
  circle(random(width), random(height), random(10, 50));
}