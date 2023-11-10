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

function precioPack3(valor) {
    if (valor > 0) {
        let precioPack3 = valor * promocionPack3
        console.log("Precio del pack con promoción:", precioPack3)
    }
    else {
        console.error("Debes ingresar el precio de un producto")
    }
}

function precioPack6(valor) {
    if (valor > 0) {
        let precioPack6 = valor * promocionPack6
        console.log("Precio del pack con promoción:", precioPack6)
    }
    else {
        console.error("Debes ingresar el precio de un producto")
    }
}

//Document Object Model

const creadorBebida = document.querySelector("div.tarjeta-producto#tarjetaBebida")

function crearProducto(bebida) {
    return `<div class="tarjeta-producto" id="tarjetaBebida">
                <img class="imagen-producto" src="${bebida.imagen}" alt="Producto">
                <h2 class="titulo-producto">${bebida.marca}</h2>
                <p class="precio-producto">${bebida.precio}</p>
                <label for="cantidad">Cantidad:</label>
                <select class="selector-cantidad" id="cantidad" name="cantidad">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button class="boton-agregar" onclick="agregarAlCarrito()">Agregar al Carrito</button>
            </div>`
}

function productoError() {
    return `<div class="tarjeta-error">
                <img src="" alt="Icono de error">
                <h2>Error en la Generación del Producto</h2>
                <p>Lo sentimos, ha ocurrido un problema al intentar generar el producto. Por favor, inténtalo de nuevo más tarde.</p>
                <button onclick="crearProducto()">Reintentar</button>
            </div>`
}

function cargarBebida() {
    if (bebidas.length > 0){
        creadorBebida.innerHTML = ""
        bebidas.forEach((bebida) => creadorBebida.innerHTML += crearProducto(bebida))
    } else {
        creadorBebida.innerHTML = productoError();
    }
}
cargarBebida()
