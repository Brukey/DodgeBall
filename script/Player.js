class Player{
    constructor(){
        this.circle = new Circle(-100, -100, 15, 255, 255, 255, 1);
        this.circles = [];
        this.wasHit = false;
        this.looseTime = undefined;
        this.looseElapsed = 0;
    }

    updatePosition(mouseX, mouseY){
        this.circle.x = mouseX;
        this.circle.y = mouseY;
        
    
        this.circles.push( new Circle(this.circle.x, this.circle.y, this.circle.radius,
            this.circle.r, this.circle.g, this.circle.b, this.circle.a));
        
    }

    render(){
        if( !this.wasHit ){
            for(let i = 0; i < this.circles.length; i++){
                if(this.circles[i].a === 0 || this.circles[i].radius <= 1)
                    this.circles.splice(i, 1);
    
                if(this.circles[i] !== undefined){
                    this.circles[i].fade(0.1);
                    this.circles[i].draw();
                }        
            }
    
            this.circle.draw();
        }
    }
}