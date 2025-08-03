//Scale for each dinosaur
let brachio_scale = 1.1;
let tri_scale = 1.8;

//Coordinates for Brachiosaurus
let brachio_x = 100
let brachio_y = 0
//Coordinates for Triceratops
let tri_x = 120
let tri_y = 120
let brachio_neck_height = 110 //90 default

// Brachiosaurus Colour Parameters
let brachio_primary = [161, 170, 125] //165, 172, 139
let brachio_secondry = [103, 109, 78]
let brachio_tertiary = [53, 61, 43]
let brachio_belly = [194, 197, 173]

// Triceratops Colour Parameters
let tri_primary = [121, 82, 43]
let tri_secondary = [40, 25, 16]
let tri_tertiary = [81, 50, 25]
let tri_belly = [140, 105, 64]

// Background
let background_colour = [161, 139, 105]
let light_stripe_colour = [181, 173, 147]
let dark_stripe_colour = [140, 105, 64]

//Not changing this parameter
let brachio_head_y = brachio_y-brachio_neck_height+30


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GLIDE_WALLPAPER);
 
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
  
  //angle set
  angleMode(DEGREES);
}

function wallpaper_background() {
  background(background_colour); 
}
function my_symbol() { // Calling on all the main functions to draw
  hstripes_dark();
  hstripes_light();
  vstripes_dark();
  vstripes_light();
  brachioDino();
  triDino();
}
// ----------Brachiosaurus----------
function brachioDino() {
  push();
  translate(brachio_x, brachio_y);   // Move origin to dino position
  scale(-brachio_scale, brachio_scale); // Add - to invert it
  translate(-brachio_x, -brachio_y); // Reset origin for drawing
  // All the body parts of the dinosaur
  brachio_scales();
  brachio_body();
  brachio_head();
  brachio_eyes();
  brachio_back_feet();
  brachio_stomach();
  brachio_front_feet();
  brachio_tail();

  pop();
}
function brachio_body() {
  noStroke();
  fill(brachio_primary);
  rect(brachio_x-50, brachio_y, 20, -brachio_neck_height); //Neck
  ellipse(brachio_x, brachio_y, 100, 50); //Body base
}
function brachio_head() {
  fill(brachio_secondry);
  ellipse(brachio_x-31, brachio_head_y-36, 10); // Scales on head
  ellipse(brachio_x-47, brachio_head_y-45, 10);
  fill(brachio_primary);
  ellipse(brachio_x-50, brachio_head_y-30, 40, 30); //Head shape
  fill(brachio_tertiary);
  ellipse(brachio_x-62, brachio_head_y-27, 4); // Nostril
}
function brachio_eyes() {
  fill(0);
  ellipse(brachio_x-48, brachio_head_y-33, 6);
}
function brachio_stomach() {
  fill(brachio_belly);
  ellipse(brachio_x, brachio_y+12.5, 85, 25);
}
function brachio_back_feet() {
  fill(brachio_tertiary);
  rect(brachio_x-40, brachio_y+10, 20, 25);
  rect(brachio_x+10, brachio_y+10, 20, 25);
}
function brachio_front_feet() {
  fill(brachio_secondry);
  rect(brachio_x-35, brachio_y+5, 20, 35);
  arc(brachio_x-25, brachio_y+6, 20, 25, 180, 360, OPEN);
  rect(brachio_x+15, brachio_y+5, 20, 35);
  arc(brachio_x+25, brachio_y+6, 20, 25, 180, 360, OPEN);
}
function brachio_tail() {
  fill(brachio_primary);
  beginShape(); // Sketching out the tail
  curveVertex(brachio_x+40, brachio_y-15);
  curveVertex(brachio_x+75, brachio_y+10);
  curveVertex(brachio_x+75, brachio_y+35);
  curveVertex(brachio_x+50, brachio_y+55);
  curveVertex(brachio_x+60, brachio_y+22.5);
  curveVertex(brachio_x+45, brachio_y+7);
  curveVertex(brachio_x+40, brachio_y-15);
  curveVertex(brachio_x+75, brachio_y+10);
  curveVertex(brachio_x+74, brachio_y+35);
  endShape();
}
function brachio_scales () {
  fill(brachio_secondry);
  noStroke();
  // Scales on the neck so when the neck parameter changes there are scales added on
  if (brachio_neck_height > 210) {
    ellipse(brachio_x-30, brachio_y-215, 10);
  }
  if (brachio_neck_height > 190) {
    ellipse(brachio_x-30, brachio_y-195, 10);
  }
  if (brachio_neck_height > 170) {
    ellipse(brachio_x-30, brachio_y-175, 10);
  }
  if (brachio_neck_height > 150) {
    ellipse(brachio_x-30, brachio_y-155, 10);
  }
  if (brachio_neck_height > 130) {
    ellipse(brachio_x-30, brachio_y-135, 10);
  }
  if (brachio_neck_height > 110) {
    ellipse(brachio_x-30, brachio_y-115, 10);
  }
  if (brachio_neck_height > 90) {
    ellipse(brachio_x-30, brachio_y-95, 10);
  }
  if (brachio_neck_height > 70) {
    ellipse(brachio_x-30, brachio_y-75, 10);
  }
  if (brachio_neck_height > 50) {
    ellipse(brachio_x-30, brachio_y-55, 10);
  }
  if (brachio_neck_height > 30) {
    ellipse(brachio_x-30, brachio_y-35, 10);
  }
  // Scales on body
  ellipse(brachio_x-20, brachio_y-22, 10);
  ellipse(brachio_x, brachio_y-25, 10);
  ellipse(brachio_x+20, brachio_y-22, 10);
  ellipse(brachio_x+40, brachio_y-15, 10);
  // Scales on tail
  ellipse(brachio_x+59, brachio_y-4, 10);
  ellipse(brachio_x+75, brachio_y+10, 10);
  ellipse(brachio_x+76, brachio_y+33, 10);
  ellipse(brachio_x+60, brachio_y+50, 10);
}
// ----------Triceratops----------
function triDino() {
  push();
  translate(tri_x, tri_y); // Move origin to dino position
  scale(-tri_scale, tri_scale); // Add - to invert it
  translate(-tri_x, -tri_y); // Reset origin for drawing
  // All the body parts of the dinosaur
  tri_back_legs();
  tri_body();
  tri_head();
  tri_eye();
  tri_stomach();
  tri_front_legs();

  pop();
}
function tri_body() {
  noStroke();
  fill(tri_primary);
  ellipse(tri_x, tri_y, 47); // Body Base
  arc(tri_x-13, tri_y-15, 110, 80, 358, 75, OPEN); // Chest & stomach
  beginShape(); // Tail
  curveVertex(tri_x-21, tri_y-15);
  curveVertex(tri_x-30, tri_y+12);
  curveVertex(tri_x-38, tri_y+14);
  curveVertex(tri_x-28, tri_y+24);
  curveVertex(tri_x-1, tri_y+23);
  curveVertex(tri_x-21, tri_y);
  curveVertex(tri_x-30, tri_y+12);
  curveVertex(tri_x-38, tri_y+14);
  endShape();
  ///triangle(tri_x-22.5, tri_y-6, tri_x-26, tri_y+4, tri_x-20, tri_y+4);
  
}
function tri_head( ){
  fill(tri_secondary);
  ellipse(tri_x+16, tri_y-3, 9) //bumps
  ellipse(tri_x+16, tri_y-15, 9) //bumps
  ellipse(tri_x+16, tri_y-27, 9) //bumps
  fill(tri_primary);
  triangle(tri_x+17, tri_y-33, tri_x+17, tri_y+7, tri_x+52, tri_y-13);
  rect(tri_x+32, tri_y-20.5, 25, 15)
  fill(tri_secondary);
  rect(tri_x+20, tri_y-20, 12, 4);
  rect(tri_x+20, tri_y-10, 12, 4);
  triangle(tri_x+52, tri_y-20, tri_x+61, tri_y-28, tri_x+57, tri_y-16)
  triangle(tri_x+34, tri_y-23, tri_x+41, tri_y-33, tri_x+40, tri_y-20)
  fill(tri_tertiary);
  ellipse(tri_x+52, tri_y-11, 3.5)
}
function tri_eye() {
  fill(0);
  ellipse(tri_x+40, tri_y-15, 5)
}
function tri_front_legs() {
  fill(tri_tertiary);
  ellipse(tri_x-12, tri_y+16, 13);
  rect(tri_x-18.5, tri_y+16, 13, 16);
  ellipse(tri_x+16, tri_y+14, 13);
  rect(tri_x+9.5, tri_y+14, 13, 16);
}
function tri_back_legs() {
  noStroke();
  fill(tri_secondary);
  rect(tri_x-12.5, tri_y+13, 13, 16);
  rect(tri_x+15.5, tri_y+11, 13, 16);
}
function tri_stomach() {
  fill(tri_belly);
  beginShape();
  vertex(tri_x-6, tri_y+25);
  vertex(tri_x+10, tri_y+22);
  vertex(tri_x+29, tri_y+12);
  vertex(tri_x+35, tri_y+4.5);
  vertex(tri_x+15, tri_y+14);
  vertex(tri_x-8, tri_y+18);
  endShape();
}
function hstripes_light(){
  noStroke();
  fill(light_stripe_colour);
  rect(0, 15, 200, 15);
  rect(0, 95, 200, 15);
  rect(0, 175, 200, 15);
}
function hstripes_dark(){
  noStroke();
  fill(dark_stripe_colour);
  rect(0, 20, 200, 15);
  rect(0, 100, 200, 15);
  rect(0, 180, 200, 15);
}
function vstripes_light() {
  noStroke();
  fill(light_stripe_colour);
  rect(15, 0, 15, 200);
  rect(95, 0, 15, 200);
  rect(175, 0, 15, 200);
}
function vstripes_dark(){
  noStroke();
  fill(dark_stripe_colour);
  rect(20, 0, 15, 200);
  rect(100, 0, 15, 200);
  rect(180, 0, 15, 200);
}


