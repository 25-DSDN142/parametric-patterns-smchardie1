//green dino
let green_x = 80
let green_y = 142
let green_neck_height = 90 //90 default
let green_head_y = green_y-green_neck_height+30
let tri_x = 128
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
  greenDino();
  triDino();
}
function greenDino (){
  g_scales();
  g_body();
  g_head();
  g_eyes();
  g_back_feet();
  g_stomach();
  g_front_feet();
  g_tail();
}
function g_body() {
  noStroke();
  fill(147, 196, 125);
  rect(green_x-50, green_y, 20, -green_neck_height);
  ellipse(green_x, green_y, 100, 50);
}
function g_head() {
  fill(112, 159, 91);
  ellipse(green_x-31, green_head_y-36, 10);
  ellipse(green_x-47, green_head_y-45, 10);
  fill(147, 196, 125);
  ellipse(green_x-50, green_head_y-30, 40, 30);
  fill(84, 120, 67);
  ellipse(green_x-62, green_head_y-27, 3);
}
function g_eyes() {
  fill(0);
  ellipse(green_x-48, green_head_y-33, 5);
}
function g_stomach() {
  fill(210, 244, 195);
  ellipse(green_x, green_y+12.5, 85, 25);
}
function g_back_feet() {
  fill(84, 120, 67);
  rect(green_x-40, green_y+10, 20, 25);
  rect(green_x+10, green_y+10, 20, 25);
}
function g_front_feet() {
  fill(112, 159, 91);
  rect(green_x-35, green_y+5, 20, 35);
  arc(green_x-25, green_y+6, 20, 25, 180, 360, OPEN);
  rect(green_x+15, green_y+5, 20, 35);
  arc(green_x+25, green_y+6, 20, 25, 180, 360, OPEN);
}
function g_tail() {
  fill(147, 196, 125);
  beginShape();
  curveVertex(green_x+40, green_y-15);
  curveVertex(green_x+75, green_y+10);
  curveVertex(green_x+75, green_y+35);
  curveVertex(green_x+50, green_y+55);
  curveVertex(green_x+60, green_y+22.5);
  curveVertex(green_x+45, green_y+7);
  curveVertex(green_x+40, green_y-15);
  curveVertex(green_x+75, green_y+10);
  curveVertex(green_x+74, green_y+35);
  endShape();
}
function g_scales () {
  fill(112, 159, 91);
  noStroke();
  //neck
  if (green_neck_height > 110) {
    ellipse(green_x-30, green_y-115, 10);
  }
  if (green_neck_height > 90) {
    ellipse(green_x-30, green_y-95, 10);
  }
  if (green_neck_height > 70) {
    ellipse(green_x-30, green_y-75, 10);
  }
  if (green_neck_height > 50) {
    ellipse(green_x-30, green_y-55, 10);
  }
  if (green_neck_height > 30) {
    ellipse(green_x-30, green_y-35, 10);
  }
  //body
  ellipse(green_x-20, green_y-22, 10);
  ellipse(green_x, green_y-25, 10);
  ellipse(green_x+20, green_y-22, 10);
  ellipse(green_x+40, green_y-15, 10);
  //tail
  ellipse(green_x+59, green_y-4, 10);
  ellipse(green_x+75, green_y+10, 10);
  ellipse(green_x+76, green_y+33, 10);
  ellipse(green_x+60, green_y+50, 10);
}
function triDino() {
  tri_back_legs();
  tri_body();
  tri_head();
  tri_eye();
  tri_stomach();
  tri_front_legs();
  
}
function tri_body() {
  fill(251, 197, 200);
  ellipse(tri_x, tri_y, 47);
  //arc(122.5, 43, 95, 60, 358, 130);
  arc(115, 33, 110, 80, 358, 75, OPEN);
  stroke(0);
  noStroke();
  beginShape();
  curveVertex(107, 48);
  curveVertex(98, 60);
  curveVertex(90, 62);
  curveVertex(100, 72);
  curveVertex(127, 71);
  curveVertex(107, 48);
  curveVertex(98, 60);
  curveVertex(90, 62);
  endShape();
  triangle(105.5, 42, 102, 52, 108, 52);
  
}
function tri_head( ){
  fill(213, 102, 111);
  ellipse(144, 45, 9) //bumps
  ellipse(144, 33, 9) //bumps
  ellipse(144, 21, 9) //bumps
  fill(251, 197, 200);
  triangle(145, 15, 145, 55, 180, 35);
  rect(160, 27.5, 25, 15)
  fill(213, 102, 111);
  rect(148, 28, 12, 4);
  rect(148, 38, 12, 4);
  triangle(180, 28, 189, 20, 185, 32)
  triangle(162, 25, 169, 15, 168, 28)
  fill(231, 142, 150);
  ellipse(180, 37, 2.5)
}
function tri_eye() {
  fill(0);
  ellipse(168, 33, 5)
}
function tri_front_legs() {
  fill(231, 142, 150);
  ellipse(116, 64, 13);
  rect(109.5, 64, 13, 16);
  ellipse(144, 62, 13);
  rect(137.5, 62, 13, 16);
}
function tri_back_legs() {
  fill(213, 102, 111);
  rect(115.5, 61, 13, 16);
  rect(143.5, 59, 13, 16);
}
function tri_stomach() {
  fill(255, 226, 228);
  beginShape();
  vertex(122, 73);
  vertex(138, 70);
  vertex(157, 60);
  vertex(163, 52.5);
  vertex(143, 62);
  vertex(120, 66);
  endShape();

}

