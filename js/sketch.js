function setup()
{
	createCanvas(800, 600);
	player = new Player(10, 10, 30, 50);
}

function draw()
{
	rect(1, 0, width-1, height);
	player.drawPlayer();
	player.gravity(2);
}