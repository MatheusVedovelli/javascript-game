var player;

function preload()
{
	player = new Player();
	player.imgLoad();
}

function setup()
{
	createCanvas(800, 600, WEBGL);
	frameRate(30); // limita a 30fps
	player.startPos();
}

function mousePressed()
{
	console.log("teste");
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
		player.jump();
}

function draw()
{
	translate(-(width/2), -(height/2));
	rect(1, 0, width-1, height - 1);

	if(keyIsDown(LEFT_ARROW))
		player.move(LEFT_ARROW);
	else if(keyIsDown(RIGHT_ARROW))
		player.move(RIGHT_ARROW);
	else
		player.move(0);

	player.drawPlayer();
}