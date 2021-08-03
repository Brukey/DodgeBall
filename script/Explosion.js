class ExplosionBall{
    constructor(startX, startY, velX, velY, size){
        this.circle = new Circle(startX, startY, size, 255, 255, 255, 1);
        this.velX = velX;
        this.velY = velY;
        this.size = size;
    }

    addGravity(){
        this.circle.y += 10;
    }

    move(){
        this.circle.x += this.velX;
        this.circle.y += this.velY;
    }

    render(){   
        this.circle.draw();
    }
}    

class Explosion{
    constructor(startX, startY, amount){
        this.balls = [];
        this.amount = amount;
        for(let i = 0; i < amount; i++){
            let xDirection = (Math.random() >= 0.5) ? -Math.random() * 10 : Math.random() * 10;
            let yDirection = Math.random() * -20;
            let size = Math.random() * 10;
            this.balls.push( new ExplosionBall(startX, startY, xDirection, yDirection, size));
        }
    }

    render(){
        for(let i = 0; i < this.amount; i++){
            this.balls[i].move();
            this.balls[i].addGravity();
            this.balls[i].render();
        }           
    }
}