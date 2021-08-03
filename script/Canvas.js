const canvas = document.querySelector("canvas");
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
const ctx = canvas.getContext("2d");

function clearScreen(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}