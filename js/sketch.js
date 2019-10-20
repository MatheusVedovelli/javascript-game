let player;
let game;
let imgbg;
let elapsed;

function preload()
{
	player = new Player();
	game = new Game();
	player.imgLoad();
	imgbg = loadImage("img/background.png");
}

function setup()
{
	createCanvas(windowWidth-20, 600, WEBGL);
	frameRate(30); // limita a 30fps
	player.startPos();
	elapsed = (new Date()).getMilliseconds();
}

function mousePressed()
{
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
		player.jump();
}

function draw()
{
	//noLoop();
	clear();
	translate(-(width/2), -(height/2));
	rect(1, 0, width-1, height - 1);
	image(imgbg, 0, 0, width, height);

	let current = (new Date()).getMilliseconds();
	player.drawPlayer(current - elapsed);
	game.mainGame(current - elapsed);
	game.drawGame();
	elapsed = current;
}