class Player
{
	constructor() // cria o player
	{
		this.width = 104;
		this.height = 120;
		this.x = 50//(width - this.width) / 2;
		this.y = (height - this.height);
		this.yspeed = 0;
		this.gforce = 4;
		this.movespeed = 10;
		this.idle = [];
		this.isMoving = 0;
		this.frameIndex = 0;
	}

	startPos() // reseta a posição do personagem
	{
		this.x = 50//(width - this.width) / 2;
		this.y = (height - this.height);
	}

	imgLoad() // carrega as imagens
	{
		for(var i = 0; i < 6; i++)
		{
			this.idle[i] = loadImage("img/player/movimento" + (i + 1) + ".png");
			this.idle[i].frameTime = 0;
		}
	}

	jump() // pula
	{
		if(this.y == height - this.height)
		{
			this.yspeed = -45;
		}
	}

	drawPlayer(elapsedTime) // printa o player na tela
	{
		noFill();
		//rect(this.x, this.y, this.width, this.height, 0, 25, 300, 485);


		let currentFrame = this.idle[this.frameIndex%this.idle.length];

		if(elapsedTime > 0)
		{
			currentFrame.frameTime += elapsedTime;
			if(currentFrame.frameTime > (1000/this.idle.length))
			{
				currentFrame.frameTime = 0;
				this.frameIndex++;
				currentFrame = this.idle[this.frameIndex%this.idle.length];
			}
		}

		this.width = currentFrame.width;
		this.height = currentFrame.height;

		image(currentFrame, this.x, this.y, this.width, this.height);
		this.gravity();
	}

	gravity() // aplica os efeitos de gravidade ao player
	{
		this.y += this.yspeed;
		this.yspeed += this.gforce;
		this.y += this.gforce;

		this.y = constrain(this.y, 0, height- this.height);
	}
}