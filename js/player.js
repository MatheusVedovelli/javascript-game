class Player
{
	constructor(playerw, playerh, startx, starty)
	{
		this.width = playerw;
		this.height = playerh;
		this.x = startx;
		this.y = starty;
	}

	drawPlayer = function()
	{
		rect(this.x, this.y, this.width, this.height);
	}

	gravity = function(weight)
	{
		this.y += weight;
		if(this.y + this.height > height)
			this.y = height - this.height;
	}
}