var PLAY = 1;
var END = 0;
var gameState = PLAY;

var box, boxImage;
var ground, groundImage;

function preload() {
  boxImage = loadImage("boxRight.png");
  groundImage = loadImage("ground.png");
}

function setup() {

  ground = createSprite(100, 700, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;

  box = createSprite(50, 180, 20, 50);
  box.addImage("box", boxImage)
  box.scale = 0.5


}

function draw() {
  background("white");
  createCanvas(windowWidth - 1, windowHeight - 1);
  //just testing
  console.log("testing");

  drawSprites();
}