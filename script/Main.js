let player = new Player();
let small_missiles = [];
let currentFrame = 0;
const FPS = 60;
let elapsed = 0;
let timeStart = Date.now();
let looseExplosion = undefined;
let messageDiv = document.getElementById("message");
let scorePanel = document.getElementById("score");
let tryAgainButton = document.getElementById("tryAgainButton");

/*
let audio_interlude = new Audio("audio/Musik-Interlude.wav");
    audio_interlude.muted = true;
    audio_interlude.play();

//audio
let audio_main = document.getElementById("audio_main");
    //audio_main.loop = true;
    audio_main.play();
*/

tryAgainButton.addEventListener("mousedown", (e) => {
    window.location.reload();
});

canvas.addEventListener("mousemove", (e) => {
    player.updatePosition(e.offsetX, e.offsetY);
});

function generateSmallMissile(limit){
    if(currentFrame % limit === 0){
        small_missiles.push( new SmallMissile(Math.random() * CANVAS_WIDTH, -10, player.circle.x, player.circle.y) );
    }
}

function raiseDifficulty(){
    let limit = 19;

    if(elapsed > 5000){
        limit--;
    }

    if(elapsed > 8000){
        limit--;
    }
    
    if(elapsed > 15000){
        limit-= 2;
    }

    if(elapsed > 20000){
        limit-= 2;
    }

    generateSmallMissile(limit);
}


function update(){
    clearScreen();
    
    if( !player.wasHit ){
         
        player.render();
    
        elapsed = Date.now() - timeStart;

        ctx.fillStyle = "black";
        ctx.font = "30px Courier New";
        ctx.strokeText(Math.ceil(elapsed / 1000) + "s", 10, 30);

        raiseDifficulty();

        for (let i = 0; i < small_missiles.length; i++){
        
            small_missiles[i].move();
            small_missiles[i].render();

            if(isCircleColliding(player.circle, small_missiles[i].circle)){
            player.wasHit = true;
            player.looseTime = Date.now();
            looseExplosion = new Explosion(player.circle.x, player.circle.y, 100);
            messageDiv.style.visibility = "visible";
            scorePanel.innerText +=  " " + Math.ceil(elapsed / 1000) + "s";
            }

            if(small_missiles[i].isOutOfBounds()){
                small_missiles.splice(i, 1);
            }
        }
    }
   

   
    currentFrame++;
   let requestID = window.requestAnimationFrame(update);
   
   if(player.wasHit){
        small_missiles = [];
        player.looseElapsed = Date.now() - player.looseTime;
        looseExplosion.render();
 }
    
}

update();

