// Global Color Variables
var r;
var g;
var b;

// Loaded Color Variables
var fun_colors;

// Array of names
var names = ["George Washington", "Abraham Lincoln",
            "George Bush", "Bill Clinton"];

function preload() {
  fun_colors = loadJSON("fun_colors.json");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  rectMode(CENTER);
  
  r = 255;
  g = 0;
  b = 0;
}

function draw() {
  fill(r, g, b);
  textSize(35);
  for (i = 0; i < names.length; i++) {
    text(names[i], 20, 40+i*40);
  }
}

function mouseDragged() {
  // randomizeRGB();

  funColors();

  // stroke(r, g, b);
  // fill(r, g, b);
  // rect(mouseX, mouseY, 20, 20);
}

function funColors() {
  fill(fun_colors.r, fun_colors.g, fun_colors.b);
}

function randomizeRGB() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}