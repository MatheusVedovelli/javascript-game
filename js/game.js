class Game
{
    constructor()
    {
        this.images = [];
        this.elapsedTime = 0;
        this.structures = [];
        this.maxX = 0;

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

    mainGame(elapsed)
    {
        if(elapsed < 0)
            return false;

        this.elapsedTime += elapsed;
        if(this.elapsedTime >= (1000/3))
        {
            for(let i = 0; i < this.structures.length; i++)
            {
                if(this.structures[i].x + this.structures[i].width <= 0)
                    this.structures.splice(i, 1);
            }

            if(this.structures.length > 0)
            {
                if(this.structures[this.structures.length-1].x < width - 500)
                {
                    let value = Math.floor(Math.random()*100)%this.images.length;
                    this.structures.push(new Structure(this.images[value]));
                    this.elapsedTime = 0;
                }
            }
            else
            {
                let value = Math.floor(Math.random()*100)%this.images.length;
                    this.structures.push(new Structure(this.images[value]));
                    this.elapsedTime = 0;
            }
            
            
            
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
    }
}