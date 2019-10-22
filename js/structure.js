function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Structure
{
    constructor(image, gapCoefficient, currentSpeed)
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

    getGap(gapCoefficient, speed)
    {
        var minGap = Math.round(this.width * (speed/2) +
            100 * gapCoefficient);
        var maxGap = Math.round(minGap * 1.5);
        return getRandomNum(minGap, maxGap);
    }

    main()
    {
        this.x -= this.xspeed;
    }

    drawStructure()
    {
        image(this.img, this.x, this.y);
    }
}