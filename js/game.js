class Game
{
    constructor()
    {
        this.images = [];
        this.elapsedTime = 0;
        this.structures = [];
        this.maxX = 0;
        this.currentSpeed = 6;

        this.reset();

        if(this.images.length <= 0)
        {
            for(let i = 0; i < 2; i++)
            {
                this.images[i] = loadImage("img/obstaculo/obj" + (i+1) + ".png");
                if(this.images[i].width > this.maxX)
                    this.maxX = this.images[i].width;
            }
        }
    }

    spawn(currentSpeed)
    {
        let value = Math.floor(Math.random()*100)%this.images.length;
        this.structures.push(new Structure(this.images[value], 0.6, currentSpeed));
        this.elapsedTime = 0;
    }

    reset()
    {
        this.structures.splice(0, this.structures.length);
        this.points = 0;
        this.delay = 1000;
        player.reset();
    }

    mainGame(elapsed)
    {
        if(elapsed < 0)
            return false;

        this.elapsedTime += elapsed;

        for(let i = 0; i < this.structures.length; i++)
        {
            if(collideRectRect(player.x, player.y, player.width, player.height, this.structures[i].x+10, this.structures[i].y+5, this.structures[i].width-30, this.structures[i].height-5))
            {
                noFill();
                rect(player.x, player.y, player.width, player.height);
                rect(this.structures[i].x+10, this.structures[i].y+5, this.structures[i].width-30, this.structures[i].height-5);
                startgame = 2;

                textSize(40);
                fill(10,10,10);
                let texto = "Game Over! Clique para reiniciar.";
                text(texto, (width - textWidth(texto))/2, height/2);

                noLoop();
            }

            if(this.structures[i].x + this.structures[i].width <= 0)
                this.structures.splice(i, 1);
        }

        if(this.currentSpeed < 16)
            this.currentSpeed += 0.001;

        if(this.structures.length > 0)
        {
            if(this.elapsedTime >= this.delay)
            {
                this.points++;
                this.elapsedTime = 0;
            }

            let lastObstacle = this.structures[this.structures.length - 1];
            if(lastObstacle && !lastObstacle.followingCreated)
            {
                if((lastObstacle.x + lastObstacle.width + lastObstacle.gap) < width)
                {
                    this.spawn(this.currentSpeed);
                    lastObstacle.followingCreated = true;
                }
            }
        }
        else
        {
            this.spawn(this.currentSpeed);
        }
        return true;
    }

    drawGame()
    {
        if(this.structures.length > 0)
        {
            for(let i = 0; i < this.structures.length; i++)
            {
                if(this.structures[i])
                {
                    this.structures[i].drawStructure();
                    this.structures[i].main();
                }
            } 
        }

        textSize(32);
        fill(10,10,10);
        let texto = "Pontos: " + this.points;
        text(texto, (width - textWidth(texto))/2, 30);
    }
}