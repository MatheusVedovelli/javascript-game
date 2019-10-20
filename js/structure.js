class Structure
{
    constructor(image)
    {
        this.x = width - image.width;
        this.y = height - image.height;
        this.img = image;
    }

    main()
    {
        this.x -= 20;
    }

    drawStructure()
    {
        image(this.img, this.x, this.y);
    }
}