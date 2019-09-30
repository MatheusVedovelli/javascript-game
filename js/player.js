class Player
{
	constructor(playerw, playerh, startx, starty) // cria o player
	{
		this.width = playerw;
		this.height = playerh;
		this.x = startx;
		this.y = starty;
		this.yspeed = 0;
		this.gforce = 1;
		this.movespeed = 5;
	}

	jump()
	{
		console.log(this.yspeed);
		if(this.y == height - this.height)
			this.yspeed = -20;
	}

	move(side)
	{
		if(side == LEFT_ARROW)
			this.x -= this.movespeed;
		else if(side == RIGHT_ARROW)
			this.x += this.movespeed;

		if(this.x +  this.width > width)
			this.x = width - this.width;

		if(this.x < 0)
			this.x = 0;
	}

	drawPlayer() // printa o player na tela
	{
		rect(this.x, this.y, this.width, this.height);
	}

	gravity() // aplica os efeitos de gravidade ao player
	{
		this.y += this.yspeed;

		if(this.yspeed < 10)
			this.yspeed += this.gforce;

		if(this.y + this.height > height)
			this.y = height - this.height;
	}
}