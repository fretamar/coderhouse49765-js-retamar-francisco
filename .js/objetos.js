const cerveza1 = {
    marca: "Heineken",
    tamanio: "1 litro",
    formato: "Botella",
    precio: 1000
}

const cerveza2 = {
    marca: "Brahma",
    tamanio: "1 litro",
    formato: "Botella",
    precio: 800
}

const cerveza3 = {
    marca: "Quilmes",
    tamanio: "1 litro",
    formato: "Botella",
    precio: 900
}

const cerveza4 = {
    marca: "Heineken",
    tamanio: "500 cc",
    formato: "Lata",
    precio: 600
}

const cerveza5 = {
    marca: "Brahma",
    tamanio: "500 cc",
    formato: "Lata",
    precio: 450
}

const cerveza6 = {
    marca: "Quilmes",
    tamanio: "500 cc",
    formato: "Lata",
    precio: 500
}

//Funcion constructora

function Cerveza (marca, tamanio, formato, precio) {
    this.marca = marca;
    this.tamanio = tamanio;
    this.formato = formato;
    this.precio = precio;
}

const cerveza7 = new Cerveza("Stella Artois", "1 litro", "Botella", 1100)
const cerveza8 = new Cerveza("Stella Artois", "500 cc", "Lata", 600)
