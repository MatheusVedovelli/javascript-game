class Player
{
	constructor() // cria o player
	{
		this.width = 300 * 0.5;
		this.height = 485 * 0.5;
		this.x = (width - this.width) / 2;
		this.y = (height - this.height);
		this.yspeed = 0;
		this.gforce = 4;
		this.movespeed = 10;
		this.idle = [];
		this.jumping = [];
		this.running = [];
		this.isMoving = 0;
	}

	startPos() // reseta a posição do personagem
	{
		this.x = (width - this.width) / 2;
		this.y = (height - this.height);
	}

	imgLoad() // carrega as imagens
	{
		for(var i = 0; i < 15; i++)
		{
			this.idle[i] = loadImage("img/player/Idle (" + (i + 1) + ").png");
			this.jumping[i] = loadImage("img/player/Jump (" + (i + 1) + ").png");
			this.running[i] = loadImage("img/player/Run (" + (i + 1) + ").png");
		}
	}

	collide(...structures)
	{
		for(var i = 0; i < structures.length; i++)
			console.log(structures[i]);

		return false;
	}

	jump(...structures) // pula
	{
		if(this.collide(structures))
			return;

		if(this.y == height - this.height)
		{
			this.yspeed = -40;
			this.isMoving = 1;
		}
	}

	move(side,...structures) // move pra esquerda e direita
	{
		if(side == LEFT_ARROW)
		{
			this.x -= this.movespeed;
			this.isMoving = -1;
		}
		else if(side == RIGHT_ARROW)
		{
			this.x += this.movespeed;
			this.isMoving = 1;
		}
		else if(this.isMoving == 1 || this.isMoving == -1)
			this.isMoving = 0;

		if(this.x + Math.abs(this.width) > width)
			this.x = width - Math.abs(this.width);

		if(this.x < 0)
			this.x = 0;
	}

	drawPlayer() // printa o player na tela
	{
		push();
		var currentFrame = this.idle[frameCount%15];

		if(this.isMoving == 1 || this.isMoving == -1)
		{
			currentFrame = this.running[frameCount%15];

			if(this.isMoving == -1 && this.width > 0)
			{
				this.width *= -1;
			}
			else if(this.isMoving == 1 && this.width < 0)
			{
				this.width *= -1;
			}
		}
		image(currentFrame, this.width > 0 ? this.x : this.x + Math.abs(this.width), this.y, this.width, this.height, 0, 25, 300, 485);
		pop();

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