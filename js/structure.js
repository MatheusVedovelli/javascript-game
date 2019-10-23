function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Structure
{
    constructor(image, gapCoefficient, currentSpeed) // cria o obstaculo
    {
        this.x = width - image.width;
        this.y = height - image.height;
        this.width = image.width;
        this.height = image.height;
        this.img = image;
        this.xspeed = currentSpeed;
        this.followingCreated = false;
        this.gapCoefficient = gapCoefficient;
        this.gap = this.getGap(this.gapCoefficient, this.xspeed);
    }

    getGap(gapCoefficient, speed) // define a diferença entre um e outro
    {
        var minGap = Math.round((this.width * ((speed > 10 ? 10 : speed)/2) +
        300) * gapCoefficient);
        var maxGap = Math.round(minGap * 1.5);
        return getRandomNum(minGap, maxGap);
    }

    main() // movimenta o obstaculo
    {
        this.x -= this.xspeed;
    }

    drawStructure() // desenha o obstaculo
    {
        image(this.img, this.x, this.y);
    }
}