var cajon1 = 95;
var cajon2 = 4;
var cajon3 = cajon1 % cajon2;
console.log (cajon3)
var saludo = "Hola";
var saludo_completo = saludo + " Letys";
console.log (saludo_completo);


// Asi se escribe sin alterar el codigo

function sumas (x)
{return x + 5;}
var suma = sumas (3)
console.log(suma)
// Vamos a crear una funcion para ver si mi commit funciona a la perfeccion
var operaciones = function suma (x){
    return x + 20
;};
console.log (operaciones(10));

function resta (x) {
    z =  x - 20
    return z
    }
var rest = resta(10)
console.log (rest)

function viajar (destino){
    if (destino === "brasil")
    {console.log ("Gire a la izquiera");}
    else if (destino === "argentina") 
    {console.log ("Gire a la derecha");}
    else {console.log ("Nos perdimos");}
}
viajar ("mexico");

//----------
var prueba = function pregunta (x){
    var salida = "tu nombre es " + x + " Y esto es una funcion";
    if (x === "carlos")
        {console.log (salida)}
    else
        {console.log ("No eres carlos");}
}
prueba ("carlos")
prueba ("Charlys")

var funcion1 = function veracidad (x){
    while (suma < 150)
        suma = suma + 10;
        console.log (suma);
    }
funcion1 (5)
