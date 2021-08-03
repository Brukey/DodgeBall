class SmallMissile{
    constructor(x, y, playerX, playerY){
        this.circle = new Circle(x, y, 8, 255, 12, 12, 1);
        this.circles = [];
        this.velX = (playerX - x) / 4 * Math.random();
        this.velY = (playerY - y) / 4 * Math.random();
    }

    isOutOfBounds(){
        if(this.circle.x + this.circle.radius < 0 || this.circle.x - this.circle.radius > CANVAS_WIDTH ||
            this.circle.y + this.circle.radius < 0 ||this.circle.y -this.circle.radius > CANVAS_HEIGHT )
            return true;
        else
            return false;    
    }

    move(){
        this.circle.x += this.velX;
        this.circle.y += this.velY;
        this.circles.push(new Circle(this.circle.x, this.circle.y, this.circle.radius,
             this.circle.r, this.circle.g, this.circle.b, this.circle.a));
    }

    render(){
        /*for(let i = 0; i < this.circles.length; i++){
            if(this.circles[i].a === 0 || this.circles[i].radius <= 1)
                this.circles.splice(i, 1);

            if(this.circles[i] !== undefined){
                this.circles[i].fade(0.1);
                this.circles[i].draw();
            }        
        }
            */

        this.circle.draw();
    }
}