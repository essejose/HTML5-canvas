/**
*
* Trabalhando com retangulos
*
**/

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle =" #33CC33";

ctx.strokeRect(50,50,100,100);


ctx.beginPath();
ctx.moveTo(75,75);
ctx.lineTo(125,125);
ctx.lineTo(125,75);
ctx.fillStyle = "blue";
ctx.fill();
