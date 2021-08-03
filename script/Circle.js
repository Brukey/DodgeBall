class Circle{
    constructor(x, y, radius, r, g, b, a){
        this.x = x;
        this.y = y;
        this.radius = radius;
        
        this.r = r; // 0 - 255
        this.g = g; // 0 - 255
        this.b = b; // 0 - 255
        this.a = a; // 0 - 1
    }

    //value : 0 - 1
    fade(value){
        if(this.radius > 0 && this.a > 0 && value > 0){
            this.radius -= this.radius * value;
            this.a -= value;
        }

        if(this.radius < 0)
            this.radius = 0;

        if(this.a < 0)
            this.a = 0;    
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(" + this.r + "," + this.g + "," + this.b + "," +  this.a + ")";
        ctx.fill();
        ctx.closePath();
    }
}