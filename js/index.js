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
/*
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

usuarioEdad()
*/
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


//Objetos

//los arrays es imporante que los declaremos con const y no con let para evitar que se puedan pisar mas adelante
const codigo = () => parseInt(Math.random() * 1000)

const cerveza1 = {
    id: codigo(),
    marca: "Heineken",
    tamanio: "1 litro",
    formato: "Botella",
    precio: 1000
}

const cerveza2 = {
    id: codigo(),
    marca: "Brahma",
    tamanio: "1 litro",
    formato: "Botella",
    precio: 800
}

const cerveza3 = {
    id: codigo(),
    marca: "Quilmes",
    tamanio: "1 litro",
    formato: "Botella",
    precio: 900
}

const cerveza4 = {
    id: codigo(),
    marca: "Heineken",
    tamanio: "500 cc",
    formato: "Lata",
    precio: 600
}

const cerveza5 = {
    id: codigo(),
    marca: "Brahma",
    tamanio: "500 cc",
    formato: "Lata",
    precio: 450
}

const cerveza6 = {
    id: codigo(),
    marca: "Quilmes",
    tamanio: "500 cc",
    formato: "Lata",
    precio: 500
}

//Condicionales
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

let DNI = parseInt(prompt("Ingresa tu DNI para corroborar que sos mayor de edad:"));
//parseInt convierte un valor texto a numerico en caso de ser posible, sino da error
console.log(DNI);


//parseFloat nos va a dar un valor numerico respetando los decimales que este tenga sin inconvenientes


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
*/

//Ciclos
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

const liquidos = ['Cerveza', 'Gaseosa', 'Jugo', 'Agua', 'Vino', 'Champagne', 'Agua con gas', 'Soda']
//break --> frena el bucle cuando se cumple la condicion del if
//saltear bebidas alcoholicas

for (let b = 0; b < liquidos.length; b++) {
    if(b === 0 || b === 4 || b === 5){
        continue 
    }
    console.log(liquidos[b])
}

let bebidaSinAlcohol = "Jugo"

while (bebidaSinAlcohol !== "Cerveza") {
    console.log("Bebida elegida ", bebidaSinAlcohol)
    bebidaSinAlcohol = prompt("Elegí una bebida sin alcohol:")
}
    alert("No se pueden ingresas bebidas alcoholicas")


let liquido = prompt("Elegí una bebida:")

switch(liquido) {
    case "Gaseosa":
        console.log("Tenemos gaseosas")
        break
    case "Cerveza":
        console.log("Tenemos cerveza")
        break
    case "Vino":
        console.log("Tenemos vino")
        break
    case "Champagne":
        console.log("Tenemos champagne")
        break
    default:
        console.log("No tenemos", liquido)
}
*/

//Funcion constructora
function Cerveza(id, marca, tamanio, formato, precio) {
    this.id = codigo();
    this.marca = marca;
    this.tamanio = tamanio;
    this.formato = formato;
    this.precio = precio;
}

const cerveza7 = new Cerveza(codigo(), "Stella Artois", "1 litro", "Botella", 1100)
const cerveza8 = new Cerveza(codigo(), "Stella Artois", "500 cc", "Lata", 600)

//Arrays y funciones

const bebidasAlcoholicas = ['Cerveza', 'Vino', 'Whisky', 'Fernet', 'Vodka', 'Absenta'];

function recorrerArray() {
    for (let i = 0; i < bebidasAlcoholicas.length; i++) {
        console.log(bebidasAlcoholicas[i]);
    }
}

function recorrerArrayTable() {
    console.table(bebidasAlcoholicas)
}

function agregarBebida() {
    let nuevaBebida = prompt("Agregá una nueva bebida:");
    if (nuevaBebida !== '' && nuevaBebida !== null) {
        bebidasAlcoholicas.push(nuevaBebida);
    } else {
        console.warn('Debes ingresar una bebida válida')
    }
}

//unshift funciona igual que push, pero agrega el elemento al principio del array
//shift permite eliminar el primer elemento del array
//pop permite eliminar el ultimo elemento del array
//join permite unir todos los elementos del array en un string separados por el caracter que queramos
//concat permite concatenar dos arrays en uno
//slice permite obtener un fragmento del array que seleccionemos, entre el primer dato que indicamos y cuantos queremos que traiga
//indexOf nos dice en que ubicacion esta ese elemento
//includes indica si un elemento se encuentra o no en el array - true or false
//sort acomoda todos los elementos en orden alfabetico
//reverse pone el array del ultimo elemento al primero, en reversa


function eliminarBebida() {
    let bebidaEliminada = prompt("Escribe el nombre de la bebida a eliminar:")
    let indice = bebidasAlcoholicas.indexOf(bebidaEliminada)

    if (indice > -1) {
        bebidasAlcoholicas.splice(indice, 1)
        console.table(bebidasAlcoholicas)
    } else {
        console.warn("No se encontro la bebida", bebidaEliminada, "en nuestro catálogo.")
    }
}

//Array de objetos y Funciones de orden superior

function productoBebida(id, marca, tamanio, tipo, formato, precio) {
    this.id = codigo();
    this.marca = marca;
    this.tamanio = tamanio;
    this.tipo = tipo;
    this.formato = formato;
    this.precio = precio;
}

function listarBebidas() {
    bebidas.forEach((bebida) => console.table(bebida))
}

function recorrerArray() {
    for (let i = 0; i < bebidas.length; i++) {
        console.log(bebidas[i]);
    }
}
function recorrerArrayTable() {
    console.table(bebidas)
}

//Arrow Function
const encontrarBebida = () => {
    let buscarBebida = prompt("Escribe la bebida que quieres buscar:");
    const resultado = bebidas.filter((bebida) => bebida.marca.toUpperCase().includes(buscarBebida.toUpperCase()));

    if (resultado.length > 0) {
        console.table(resultado);
    } else {
        let confirmacion = confirm("No se encontró la bebida '" + buscarBebida + "' en nuestro catálogo. ¿Quieres agregarla?");

        if (confirmacion) {
            let marca = prompt("Indica la marca:");
            if (marca !== "" && marca !== null) {
                let tamanio = prompt("Indica el tamaño de la bebida:");
                if (tamanio !== "" && tamanio !== null) {
                    let tipo = prompt("Indica el tipo de bebida:");
                    if (tipo !== "" && tipo !== null) {
                        let formato = prompt("Indica el formato en que se vende:");
                        if (formato !== "" && formato !== null) {
                            let precio = parseFloat(prompt("Indica el precio de la bebida:"));
                            if (precio !== "" && precio !== null) {
                                bebidas.push(codigo(), marca, tamanio, tipo, formato, precio)
                                console.log("Gracias por agregar la bebida: " + codigo() + " " + marca + " " + tamanio + " " + tipo + " " + formato + " $" + precio);
                            } else {
                                console.warn('Debes ingresar un precio válido');
                            }
                        } else {
                            console.warn('Debes ingresar un formato válido');
                        }
                    } else {
                        console.warn('Debes ingresar un tipo de bebida válido');
                    }
                } else {
                    console.warn('Debes ingresar un tamaño válido');
                }
            } else {
                console.warn('Debes ingresar una marca válida');
            }
        } else {
            console.log("Gracias por su visita!");
        }
    }
}

function bebidasPack6() {
    let precioPack = bebidas.map((bebida) => {
        return {
            id: bebida.id,
            nombre: bebida.marca,
            formato: bebida.formato,
            precioUnidad: bebida.precio,
            precioPack6: bebida.precio * 5.5,
        }
    })
    console.table(precioPack)
}

function bebidasAlfabeticamente() {
    bebidas.sort((a, b) => {
        if (a.tipo > b.tipo) {
            return 1
        } if (a.tipo < b.tipo) {
            return -1
        }
        return 0
    })
    console.table(bebidas)
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
                <button id="${bebida.id}" class="boton-agregar" onclick="agregarAlCarrito()">Agregar al Carrito</button>
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
    if (bebidas.length > 0) {
        creadorBebida.innerHTML = ""
        bebidas.forEach((bebida) => creadorBebida.innerHTML += crearProducto(bebida))
        const bebidaCarrito = document.querySelectorAll("button.boton-agregar")
        console.log(bebidaCarrito)
    } else {
        creadorBebida.innerHTML = productoError();
    }
}
cargarBebida()

const selCategoria = document.querySelector("select.selectBebidas");
const tiposAgregados = new Set(); 

bebidas.forEach((bebida) => {
    if (!tiposAgregados.has(bebida.tipo)) { 
        const opcion = document.createElement("option");
        opcion.value = bebida.tipo;
        opcion.text = bebida.tipo;
        selCategoria.appendChild(opcion);

        tiposAgregados.add(bebida.tipo); 
    }
});

//Eventos

const irCarrito = document.querySelector("img#carrito-compra")

irCarrito.addEventListener("click", () => {
    alert("Te rompiste un carrito mi chango")
})   

