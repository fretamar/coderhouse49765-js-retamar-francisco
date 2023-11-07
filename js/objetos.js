const codigo = ()=> parseInt(Math.random() * 1000)

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

//Funcion constructora

function Cerveza (id, marca, tamanio, formato, precio) {
    this.id = codigo();
    this.marca = marca;
    this.tamanio = tamanio;
    this.formato = formato;
    this.precio = precio;
}

const cerveza7 = new Cerveza(codigo(), "Stella Artois", "1 litro", "Botella", 1100)
const cerveza8 = new Cerveza(codigo(), "Stella Artois", "500 cc", "Lata", 600)
