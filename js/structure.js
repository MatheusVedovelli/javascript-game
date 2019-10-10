class Structure
{
    constructor(sx, sy, swidth, sheight)
    {
        this.x = sx;
        this.y = sy;
        this.width = swidth;
        this.height = sheight;
    }

    drawStructure()
    {
        rect(this.x, this.y, this.width, this.height);
    }
}

var structures = [];