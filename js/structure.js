class Structure
{
    constructor(image)
    {
        this.x = width - image.width;
        this.y = height - image.height;
        this.width = image.width;
        this.height = image.height;
        this.img = image;
        this.xspeed = 20;
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