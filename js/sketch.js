let player;
let game;
let imgbg;
let elapsed;
let startgame = 0;

function preload()
{
	player = new Player();
	game = new Game();
	player.imgLoad();
	imgbg = loadImage("img/background.png");
}

function setup()
{
	createCanvas(windowWidth-20, 600);
	frameRate(30); // limita a 30fps
	player.startPos();
	elapsed = (new Date()).getMilliseconds();
}

function mousePressed()
{
	if(startgame != 1)
	{
		game.reset();
		startgame = 1;
		loop();	
	}
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		player.jump();	
	}
}

function draw()
{
	noFill();
	image(imgbg, 0, 0, width, height);
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

	let current = (new Date()).getMilliseconds();
	player.drawPlayer(current - elapsed);
	game.mainGame(current - elapsed);
	game.drawGame();
	elapsed = current;
}