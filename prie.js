var cu = prompt("cuantos números va a ingresar (digite numeros, no texto)");

var i;
var cd;
    x = [];
for (var i = 1; i <= cu; i++) {
	var c = prompt("Escriba numero");
	x.push(c);
}
 var nu= "El numero mayor es:"
alert(nu +" "+ Math.max.apply(null, x));