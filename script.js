/*Creación de variables*/
var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var imagen = document.querySelector(".imagen");
var textoImagen = document.querySelector(".texto-imagen");
var textoResultado = document.querySelector(".texto-encriptado-desencriptado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
