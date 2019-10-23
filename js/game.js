class Game
{
    constructor() // constrói a base do game
    {
        this.images = [];
        this.elapsedTime = 0;
        this.structures = [];
        this.maxX = 0;
        this.currentSpeed = 6;

        this.reset();

        if(this.images.length <= 0)
        {
            for(let i = 0; i < 5; i++)
            {
                this.images[i] = loadImage("img/obstaculo/obj" + (i+1) + ".png");
                if(this.images[i].width > this.maxX)
                    this.maxX = this.images[i].width;
            }
        }
    }

    spawn(currentSpeed) // chama os objetos
    {
        let value = Math.floor(Math.random()*100)%this.images.length;
        this.structures.push(new Structure(this.images[value], 0.6, currentSpeed));
        this.elapsedTime = 0;
    }

    reset() // reinicia o jogo
    {
        this.structures.splice(0, this.structures.length);
        this.points = 0;
        this.delay = 1000;
        this.currentSpeed = 6;
        player.reset();
    }

    mainGame(elapsed) // gerencia o jogo
    {
        if(elapsed < 0)
            return false;

        this.elapsedTime += elapsed;

        for(let i = 0; i < this.structures.length; i++) // varre todos os obstaculos pra fazer a colisão e deletar os que ja sairam da tela
        {
            if(collideRectRect(player.x+10, player.y, player.width-50, player.height, this.structures[i].x+10, this.structures[i].y+5, this.structures[i].width-30, this.structures[i].height-5))
            {
                noFill();
                rect(player.x+10, player.y, player.width-50, player.height);
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

        if(this.currentSpeed < 16) // aumenta a velocidade com o tempo
            this.currentSpeed += 0.006;

        if(this.structures.length > 0)
        {
            if(this.elapsedTime >= this.delay) // aumenta a pontuação com o tempo
            {
                this.points++;
                this.elapsedTime = 0;
            }

            let lastObstacle = this.structures[this.structures.length - 1];
            if(lastObstacle && !lastObstacle.followingCreated)
            {
                if((lastObstacle.x + lastObstacle.width + lastObstacle.gap) < width) // cria o proximo obstaculo com base na distancia entre um e outro
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

    drawGame() // desenha o jogo
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