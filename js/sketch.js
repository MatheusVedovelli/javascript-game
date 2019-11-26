let player;
let game;
let imgbg;
let elapsed;
let startgame = 1;

function getTimeStamp() {
	return performance.now();
}

function preload()
{
	player = new Player();
	game = new Game();
	player.imgLoad();
	imgbg = loadImage("img/background.jpg");
}

function setup()
{
	createCanvas(windowWidth-20, 600);
	tf.setBackend("cpu");
	frameRate(60);
	player.startPos();
	elapsed = getTimeStamp();
}

/* function mousePressed()
{
	if(startgame != 1)
	{
		game.reset();
		startgame = 1;
		loop();	
	}
} */

/* function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		player.jump(game.currentSpeed);	
	}
} */

function draw()
{
	noFill();
	image(imgbg, 0, 0, imgbg.width < width ? width : imgbg.width, height);
	rect(1, 0, width-1, height - 1);

	if(startgame == 0)
	{
		textSize(40);
		fill(10,10,10);
		let texto = "Clique para começar";
		text(texto, (width - textWidth(texto))/2, height/2);
		noLoop();
		return false;
	}

	let current = getTimeStamp();
	player.drawPlayer(current - elapsed);
	game.mainGame(current - elapsed);
	game.drawGame();
	elapsed = current;
}