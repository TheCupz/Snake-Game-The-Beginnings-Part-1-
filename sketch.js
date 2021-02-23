var timmehTheSnake
function preload() {}
function setup() {
  createCanvas(400, 400);
  timmehTheSnake = new Snake()
  frameRate(10)
}
function draw() {
  background("black");
  timmehTheSnake.update();
  timmehTheSnake.show();
}

function keyPressed () {
  if(keyCode === UP_ARROW){
    timmehTheSnake.dir(0,-1);
  }
  else if(keyCode === DOWN_ARROW){
    console.log("Working");
    timmehTheSnake.dir(0,1);
  }
  else if(keyCode === LEFT_ARROW){
    timmehTheSnake.dir(-1,0);
  }
  else if(keyCode === RIGHT_ARROW){
    timmehTheSnake.dir(1,0);
  }

}