/*
let articulo = "Cerveza Heineken";
let volumen = "1l"
let precio = 1000;
let cantidad = 1;
let formato = "Botella";
let tieneAlcohol = true;
const blanco = " ";
let pack3 = 2.5 * precio;
let pack6 = 5 * precio;
*/

/*
let DNI = parseInt(prompt("Ingresa tu DNI para corroborar que sos mayor de edad:"));
//parseInt convierte un valor texto a numerico en caso de ser posible, sino da error
console.log(DNI);
*/

//parseFloat nos va a dar un valor numerico respetando los decimales que este tenga sin inconvenientes

/*
let resultado = precio > pack3;

console.log ("Resultado de la comparación ", resultado);


if (pack3 < (precio * 3)){
    console.log("Nuestros precios son menores comprando en mayor cantidad")
}


let edad = prompt("Ingrese su edad:")

if (edad >= 18){
    console.log("Bienvenido a nuestro kiosco")
}
else {
    console.warn("No sos mayor de edad, por lo que no podes ingresar.")
}
*/

let curaMalaria = "Agua Tonica" 
let adivinanza = confirm("¿Queres jugar un juego?🎁")

if (adivinanza === true) {
    let respuestaUsuario = prompt("¿Que bebida se creo como una cura contra la malaria?🍵☣")   
    if (respuestaUsuario === "Agua") {
        console.warn("Cerca, pero igualmente no se inventó el agua")
    }
    else if (respuestaUsuario === "Vino") {
        console.error("No, esa se inventó para emborracharse no mas")
    }
    else if (respuestaUsuario === "Coca Cola") {
        console.warn("No, esa se creo contra los problemas de digestión")
    }
    else if (respuestaUsuario === "Whisky") {
        console.error("No no, lejos lejos")
    }
    else if (respuestaUsuario === "Vodka") {
        console.error("Esa fue para combatir el frio en Rusia")
    }
    else if (respuestaUsuario !== curaMalaria) {
        console.error("Frío Frío")
    }
    else if (respuestaUsuario === curaMalaria) {
        console.log("Siiii")
    }
}
else {
    console.log("Que aburridx.")
}


/*
= igual
== es igual
=== es extrictamente igual
!= distinto
!== extrictamente distinto
> mayor que
< menor que
<= menor o igual
>= mayor o igual
&& operador and "Y"
|| operador or "O"
! operador not "no"
*/