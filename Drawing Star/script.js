/**
*
* Star
*
**/

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();

ctx.moveTo(70,250);
ctx.lineTo(150,40);
ctx.lineTo(220,240);
ctx.lineTo(50,110);
ctx.lineTo(240,100);
ctx.lineTo(70,255);

ctx.lineWidth =15;
ctx.strokeStyle = 'green';

ctx.stroke();


