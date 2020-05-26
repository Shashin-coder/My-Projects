var ball, img, paddle, paddleimg, count;

function preload() {
  img = loadImage("ball.png");
  paddleimg = loadImage("paddle.png");

}

function setup() {
  createCanvas(400, 400);
  edges = createEdgeSprites();

  ball = createSprite(100, 200, 20, 20);
  paddle = createSprite(380, 200, 20, 20);
  ball.addImage("ball", img);
  ball.scale = 0.5
  paddle.addImage("paddle", paddleimg);
  ball.velocityX = 9;
  ball.velocityY = random(-1, 1);
  count = 0;
}

function draw() {
  background(205, 153, 0);
  edges = createEdgeSprites();

  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0]);
  paddle.setCollider("rectangle", 0, 0, 25, 95);

  if (ball.isTouching(paddle)) {
    ball.velocityX = -ball.velocityX;
    ball.velocityY = random(-5, 3);
    count = count + 1

  }
  if (ball.x > 400) {
    fill("red");
    textSize = 30;
    text("GAME OVER", 150, 200);
  }

  paddle.collide(edges);

  console.log(ball.velocityY);
  fill("blue");
  textSize = 20;
  text("SCORE:" + count, 30, 50);




  if (keyDown(UP_ARROW)) {
    paddle.velocityY = -20
  }

  if (keyDown(DOWN_ARROW)) {
    paddle.velocityY = 20
  }
  drawSprites();

}