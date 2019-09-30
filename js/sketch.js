var player;

function setup()
{
	createCanvas(800, 600);
	player = new Player(60, 130, (width - 60) / 2, height - 130);
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
		player.jump();
}

function draw()
{
	rect(1, 0, width-1, height);

	if(keyIsDown(LEFT_ARROW))
		player.move(LEFT_ARROW);

	if(keyIsDown(RIGHT_ARROW))
		player.move(RIGHT_ARROW);

	player.drawPlayer();
	player.gravity();
}