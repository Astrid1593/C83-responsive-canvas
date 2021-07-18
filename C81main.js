var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
var width = screen.width;
var newWidth = screen.width - 70;
var newHeight = screen.height - 300;
var lastXPosition;
var lastYPosition;
canvas.addEventListener("touchstart", touchStart);
canvas.addEventListener("touchmove", touchMove);
canvas.addEventListener("mousemove", mouseMove);
if(width < 992){
    document.getElementById("mainCanvas").width = newWidth;
    document.getElementById("mainCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}
function touchStart(e){
    lastXPosition = e.touches[0].clientX - canvas.offsetLeft;
    lastYPosition = e.touches[0].clientY - canvas.offsetTop;
    console.log("You touched the screen");
}
function touchMove(e){
    var currentXPosition = e.touches[0].clientX - canvas.offsetLeft;
    var currentYPosition = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.lineWidth = document.getElementById("widthInput").value;
    ctx.strokeStyle = document.getElementById("colourInput").value;
    ctx.moveTo(lastXPosition, lastYPosition);
    ctx.lineTo(currentXPosition, currentYPosition);
    ctx.stroke();
    lastXPosition = currentXPosition;
    lastYPosition = currentYPosition;
    console.log("You drew something with touch");
}
if(width > 992){
    document.getElementById("mainCanvas").width = newWidth;
    document.getElementById("mainCanvas").height = newHeight;
}

function mouseMove(e){
        var currentXPosition = e.clientX - canvas.offsetLeft;
        var currentYPosition = e.clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.lineWidth = document.getElementById("widthInput").value;
        ctx.strokeStyle = document.getElementById("colourInput").value;
        ctx.moveTo(lastXPosition, lastYPosition);
        ctx.lineTo(currentXPosition, currentYPosition);
        lastXPosition = currentXPosition;
        lastYPosition = currentYPosition;
        ctx.stroke();
}
function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}