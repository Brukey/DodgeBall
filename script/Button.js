class Button{
    constructor(x, y, w, h, text){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;

    }

    isInside(mouseX, mouseY){
        //if(mouseX)
    }

    render(){
        ctx.fillStyle = "rgba(123, 40, 200, 0.5)";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = "black";
        ctx.lineWidth = "3px";
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "rgba(10, 20, 100, 1)";
        ctx.font = "28px Verdana";
        ctx.fillText(this.text, this.x, this.y + this.h / 2, this.w);
    }
}