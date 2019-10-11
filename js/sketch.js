var player;
var background;

function preload()
{
	player = new Player();
	player.imgLoad();
	background = loadImage("img/background.png");
}

function setup()
{
	createCanvas(800, 600, WEBGL);
	frameRate(30); // limita a 30fps
	player.startPos();
	//structures.push(new Structure(10, 10, 50, 100));
}

var startX = 0;
var startY = 0;

function mousePressed()
{
	//startX = mouseX;
	//startY = mouseY;
	structures.push(new Structure(mouseX, height-100, 50, 100));
}

function mouseReleased()
{
	//if(startX != mouseX && startY != mouseY)
	//	structures.push(new Structure(startX, startY, mouseX - startX, mouseY - startY));		
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
	image(background, 0, 0, width, height);

	if(keyIsDown(LEFT_ARROW))
		player.move(LEFT_ARROW);
	else if(keyIsDown(RIGHT_ARROW))
		player.move(RIGHT_ARROW);
	else
		player.move(0, structures);
	
	for(var i = 0; i < structures.length; i++)
	{
		structures[i].drawStructure();
		structures[i].x-= 5;
		if(structures[i].x+structures[i].width<0)
		{
			structures.splice(i,1);
			console.log(structures);
		}
	}

	player.drawPlayer();
}