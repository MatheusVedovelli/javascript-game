class Game
{
    constructor()
    {
        this.images = [];
        this.elapsedTime = 0;
        this.structures = [];
        this.maxX = 0;
        this.delay = 1000;
        this.points = 0;

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

    spawn()
    {
        let value = Math.floor(Math.random()*100)%this.images.length;
        this.structures.push(new Structure(this.images[value]));
        this.elapsedTime = 0;
    }

    mainGame(elapsed)
    {
        if(elapsed < 0)
            return false;

        this.elapsedTime += elapsed;

        for(let i = 0; i < this.structures.length; i++)
        {
            if(collideRectRect(player.x, player.y, player.width, player.height, this.structures[i].x, this.structures[i].y, this.structures[i].width, this.structures[i].height))
            {
                rect(player.x, player.y, player.width, player.height);
                rect(this.structures[i].x, this.structures[i].y, this.structures[i].width, this.structures[i].height);
                noLoop();
            }

            if(this.structures[i].x + this.structures[i].width <= 0)
                this.structures.splice(i, 1);
        }

        

        if(this.structures.length > 0)
        {
            if(this.elapsedTime >= this.delay)
            {
                this.points++;
                if(this.structures[this.structures.length-1].x < width - 500)
                {
                    this.spawn();   
                }
            }
        }
        else
        {
            this.spawn();
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
        text("Pontos: " + this.points, width/2, 30);
    }
}