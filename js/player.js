class Player
{
	constructor() // cria o player
	{
		this.width = 104;
		this.height = 120;
		this.x = 50//(width - this.width) / 2;
		this.y = (height - this.height);
		this.yspeed = 0;
		this.gforce = 0.6;
		this.idle = [];
		this.isMoving = 0;
		this.frameIndex = 0;
		this.startTime = (new Date()).getMilliseconds();
		this.time = getTimeStamp();
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

	jump(speed) // pula
	{
		
		if(this.y + this.height == height)
		{
			this.yspeed = -15 - (speed/10);
		}
	}

	reset()
	{
		this.width = 104;
		this.height = 120;
		this.x = 50//(width - this.width) / 2;
		this.y = (height - this.height);
		this.yspeed = 0;
		this.isMoving = 0;
		this.frameIndex = 0;
		this.startTime = (new Date()).getMilliseconds();
	}

	drawPlayer(elapsedTime) // printa o player na tela
	{
		noFill();
		this.gravity();
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
		//this.height = currentFrame.height;

		let ydiff = this.height - currentFrame.height;;

		image(currentFrame, this.x, this.y + ydiff);
		//rect(this.x, this.y, this.width, this.height);
	}

	gravity() // aplica os efeitos de gravidade ao player
	{
		let now = getTimeStamp();
		let deltaTime = now - this.time;
		this.time = now;
		
		let msPerFrame = 1000/60;
		let framesElapsed = deltaTime/msPerFrame;

		this.y += Math.round(this.yspeed * framesElapsed);
		this.yspeed += this.gforce * framesElapsed;

		this.y = constrain(this.y, 0, height- this.height);
	}
}