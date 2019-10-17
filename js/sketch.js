let player;
let imgbg;
let elapsed;
var obstaculos = [];

function preload()
{
	player = new Player();
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
	structures.push(new Structure(mouseX, height-100, 50, 100));
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
		player.jump();
}

function draw()
{
	clear();
	translate(-(width/2), -(height/2));
	rect(1, 0, width-1, height - 1);
	image(imgbg, 0, 0, width, height);
	
	for(var i = 0; i < structures.length; i++)
	{
		structures[i].drawStructure();
		structures[i].x-= 15;
		if(structures[i].x+structures[i].width<0)
			structures.splice(i,1);
	}

	let current = (new Date()).getMilliseconds();
	player.drawPlayer(current - elapsed);
	elapsed = current;
}