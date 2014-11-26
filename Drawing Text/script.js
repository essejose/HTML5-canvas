/**
*
* Trabalhando com retangulos
*
**/

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");


ctx.font = " 36pt Impact";
ctx.textAling = "center";

ctx.fillStyle = "white";
ctx.fillText("Hello World", canvas.width/2,80);

ctx.fillStyle = "black";
ctx.lineWidth = 3;
ctx.strokeText("Hello World", canvas.width/2,80);
