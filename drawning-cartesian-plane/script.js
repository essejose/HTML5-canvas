/**
*
* Trabalhando com planos cartesianos e curvas com retas
*
**/

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var altura = window.innerHeight * 0.9;
var largura = window.innerWidth * 0.9;
var tamanho = altura;
var meio = (tamanho / 2);
var distancia = (largura * 0.5) - meio;

canvas.height = altura;
canvas.width = largura;

ctx.beginPath();
// Eixo Y
ctx.moveTo(distancia + (meio), 0);
ctx.lineTo(distancia + (meio), tamanho);
// Eixo X
ctx.moveTo(distancia, meio);
ctx.lineTo(distancia + (tamanho), meio);

for (i = 0; i < meio; i += 5){
	// 1º quadrante
	ctx.moveTo(distancia + (meio), i);
	ctx.lineTo(distancia + (meio + i), meio);
	// 2º quadrante
	ctx.moveTo(distancia + (meio), (meio - i));
	ctx.lineTo(distancia + (i), meio);
	// 3º quadrante
	ctx.moveTo(distancia + (meio), (tamanho - i));
	ctx.lineTo(distancia + (meio - i), meio);
	// 4º quadrante
	ctx.moveTo(distancia + (meio), (tamanho - i));
	ctx.lineTo(distancia + (meio + i), meio);
}
ctx.stroke();