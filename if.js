var Piedra = 1;
var Papel = 2;
var Tijera = 3;

if (Piedra === 3){
    console.log ("ganaste");
} else if (edad > 18){
    console.log("perdiste");
} else {
    console.log ("empate");
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+min)}

function eleccion(jugada){
let resultado = "" 
if(jugada == 1) {
resultado = "PIEDRA"}
else if(jugada == 2) {
resultado = "PAPEL"}
else if(jugada == 3) {
resultado = "TIJERA"}
else {
resultado = "PERDER"
}
return resultado 
}