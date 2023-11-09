//Variables

// declaracion
/*let articulo = "Cerveza Heineken";
let volumen = "1l"
let precio = 1000;
let cantidad = 1;
let formato = "Botella";
let tieneAlcohol = true;
const blanco = " ";*/
/* snake_case - kebab-case */


// asignacion
/*articulo = "Gaseosa Coca Cola";
volumen = "2l";
precio = 500;
cantidad = 1;
formato = "Botella"
tieneAlcohol = false;

let pack3 = 3 * precio;
let pack6 = 6 * precio; 
*/
/*
articulo = prompt("¿Que articulo estas buscando?");
let resultado = confirm("Te mostramos " + articulo + " por unidad");
alert("Selección del usuario " + resultado);
*/

/*
articulo = prompt("¿Que estas buscando?");
console.log("Esta buscando: " + articulo);
console.warn("Mensaje de advertencia");
console.error("Mensaje de error");
*/

//funcion convencional
function usuarioEdad() {
    nombre = prompt("Ingresa tu nombre: ")
    if (nombre !== null && nombre !== "") {
        edad = prompt("Ingresa tu edad: ")
        if (edad >= 18) {
            console.log("Bienvenidx", nombre)
        }
        else {
            console.log("Tenes que ser mayor de edad para ingresar")
        }
    }
    else {
        console.log("Tenes que ingresar un nombre válido")
    }
}   

//funcion con parametro

let promocionPack6 = 5
let promocionPack3 = 2.75

function precioPack3(valor){
    if (valor > 0) {
        let precioPack3 = valor * promocionPack3
            console.log("Precio del pack con promoción:", precioPack3)
    }
    else{
        console.error("Debes ingresar el precio de un producto")
    }
}   

function precioPack6(valor){
    if (valor > 0) {
        let precioPack6 = valor * promocionPack6
            console.log("Precio del pack con promoción:", precioPack6)
    }
    else{
        console.error("Debes ingresar el precio de un producto")
    }
}   

//Document Object Model

const tarjetaProducto = document.getElementsByClassName("tarjeta-producto")