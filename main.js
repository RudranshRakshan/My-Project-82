canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "empty";
lastX=0, lastY=0;
currX=0, currY=0;
color = "black";
width = 2;
radius=30;

canvas.addEventListener("mousedown", myMousedown)
function myMousedown(e) {
    mouseEvent = "mousedown";
    color=document.getElementById("colour").value
    width=document.getElementById("linewidth").value
}

canvas.addEventListener("mouseup", myMouseup)
function myMouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseleave)
function myMouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", myMousemove)
function myMousemove(e) {
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currX, currY,radius,0, 2 * Math.PI)
        ctx.stroke()
    }
    lastY = currY;
    lastX = currX
}

function clr(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}