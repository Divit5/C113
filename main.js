function preload() {
    img = loadImage('https://www.pexels.com/photo/beautiful-view-of-moraine-lake-2662116/');
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
   }

function draw() {
    image(img, 10, 10, 150, 120)
   fill(0, 128, 0);
   stroke(0, 128, 0);
   circle(150, 50, 70);
}


