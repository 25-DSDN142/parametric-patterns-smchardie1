//brachio dino
let brachio_scale = 0.8; // default: 1 (100% size)
let tri_scale = 1.2;     // you can change this as needed
let brachio_x = 60
let brachio_y = 150
let brachio_neck_height = 150 //90 default
let brachio_head_y = brachio_y-brachio_neck_height+30
let tri_x = 120
let tri_y = 48


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
 
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
  
  //angle set
  angleMode(DEGREES);
}

function wallpaper_background() {
  background(255); 
}
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  hstripes_dark();
  hstripes_light();
  brachioDino();
  triDino();
}
function brachioDino() {
  push();
  translate(brachio_x, brachio_y);   // Move origin to dino position
  scale(brachio_scale, brachio_scale); // Add - to invert it
  translate(-brachio_x, -brachio_y); // Reset origin for drawing

  g_scales();
  g_body();
  g_head();
  g_eyes();
  g_back_feet();
  g_stomach();
  g_front_feet();
  g_tail();

  pop();
}
function g_body() {
  noStroke();
  fill(147, 196, 125);
  rect(brachio_x-50, brachio_y, 20, -brachio_neck_height);
  ellipse(brachio_x, brachio_y, 100, 50);
}
function g_head() {
  fill(112, 159, 91);
  ellipse(brachio_x-31, brachio_head_y-36, 10);
  ellipse(brachio_x-47, brachio_head_y-45, 10);
  fill(147, 196, 125);
  ellipse(brachio_x-50, brachio_head_y-30, 40, 30);
  fill(84, 120, 67);
  ellipse(brachio_x-62, brachio_head_y-27, 3);
}
function g_eyes() {
  fill(0);
  ellipse(brachio_x-48, brachio_head_y-33, 5);
}
function g_stomach() {
  fill(210, 244, 195);
  ellipse(brachio_x, brachio_y+12.5, 85, 25);
}
function g_back_feet() {
  fill(84, 120, 67);
  rect(brachio_x-40, brachio_y+10, 20, 25);
  rect(brachio_x+10, brachio_y+10, 20, 25);
}
function g_front_feet() {
  fill(112, 159, 91);
  rect(brachio_x-35, brachio_y+5, 20, 35);
  arc(brachio_x-25, brachio_y+6, 20, 25, 180, 360, OPEN);
  rect(brachio_x+15, brachio_y+5, 20, 35);
  arc(brachio_x+25, brachio_y+6, 20, 25, 180, 360, OPEN);
}
function g_tail() {
  fill(147, 196, 125);
  beginShape();
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
function g_scales () {
  fill(112, 159, 91);
  noStroke();
  //neck
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
  //body
  ellipse(brachio_x-20, brachio_y-22, 10);
  ellipse(brachio_x, brachio_y-25, 10);
  ellipse(brachio_x+20, brachio_y-22, 10);
  ellipse(brachio_x+40, brachio_y-15, 10);
  //tail
  ellipse(brachio_x+59, brachio_y-4, 10);
  ellipse(brachio_x+75, brachio_y+10, 10);
  ellipse(brachio_x+76, brachio_y+33, 10);
  ellipse(brachio_x+60, brachio_y+50, 10);
}
function triDino() {
  push();
  translate(tri_x, tri_y);
  scale(tri_scale);
  translate(-tri_x, -tri_y);

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
  fill(251, 197, 200);
  ellipse(tri_x, tri_y, 47);
  //arc(122.5, 43, 95, 60, 358, 130);
  arc(tri_x-13, tri_y-15, 110, 80, 358, 75, OPEN);
  beginShape();
  curveVertex(tri_x-21, tri_y-15);
  curveVertex(tri_x-30, tri_y+12);
  curveVertex(tri_x-38, tri_y+14);
  curveVertex(tri_x-28, tri_y+24);
  curveVertex(tri_x-1, tri_y+23);
  curveVertex(tri_x-21, tri_y);
  curveVertex(tri_x-30, tri_y+12);
  curveVertex(tri_x-38, tri_y+14);
  endShape();
  triangle(tri_x-22.5, tri_y-6, tri_x-26, tri_y+4, tri_x-20, tri_y+4);
  
}
function tri_head( ){
  fill(213, 102, 111);
  ellipse(tri_x+16, tri_y-3, 9) //bumps
  ellipse(tri_x+16, tri_y-15, 9) //bumps
  ellipse(tri_x+16, tri_y-27, 9) //bumps
  fill(251, 197, 200);
  triangle(tri_x+17, tri_y-33, tri_x+17, tri_y+7, tri_x+52, tri_y-13);
  rect(tri_x+32, tri_y-20.5, 25, 15)
  fill(213, 102, 111);
  rect(tri_x+20, tri_y-20, 12, 4);
  rect(tri_x+20, tri_y-10, 12, 4);
  triangle(tri_x+52, tri_y-20, tri_x+61, tri_y-28, tri_x+57, tri_y-16)
  triangle(tri_x+34, tri_y-23, tri_x+41, tri_y-33, tri_x+40, tri_y-20)
  fill(231, 142, 150);
  ellipse(tri_x+52, tri_y-11, 2.5)
}
function tri_eye() {
  fill(0);
  ellipse(tri_x+40, tri_y-15, 5)
}
function tri_front_legs() {
  fill(231, 142, 150);
  ellipse(tri_x-12, tri_y+16, 13);
  rect(tri_x-18.5, tri_y+16, 13, 16);
  ellipse(tri_x+16, tri_y+14, 13);
  rect(tri_x+9.5, tri_y+14, 13, 16);
}
function tri_back_legs() {
  noStroke();
  fill(213, 102, 111);
  rect(tri_x-12.5, tri_y+13, 13, 16);
  rect(tri_x+15.5, tri_y+11, 13, 16);
}
function tri_stomach() {
  fill(255, 226, 228);
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
  fill(222, 236, 255);
  rect(0, 0, 200, 15);
  rect(0, 40, 200, 15);
  rect(0, 80, 200, 15);
  rect(0, 120, 200, 15);
  rect(0, 160, 200, 15);
}
function hstripes_dark(){
  noStroke();
  fill(164, 198, 245);
  rect(0, 5, 200, 15);
  rect(0, 45, 200, 15);
  rect(0, 85, 200, 15);
  rect(0, 125, 200, 15);
  rect(0, 165, 200, 15);
}


