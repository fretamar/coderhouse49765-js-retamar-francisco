//Objetos

//los arrays es imporante que los declaremos con const y no con let para evitar que se puedan pisar mas adelante
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
    let bebidaEliminada= prompt("Escribe el nombre de la bebida a eliminar:")
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

const bebidas = [
    { id: codigo(), marca: "Villa del sur", tamanio: "500 cc", tipo: "Agua mineral", formato: "Botella", precio: 200 },
    { id: codigo(), marca: "Bonaqua", tamanio: "500 cc", tipo: "Agua mineral", formato: "Botella", precio: 150 },
    { id: codigo(), marca: "Villavicencio", tamanio: "500 cc", tipo: "Agua mineral", formato: "Botella", precio: 220 },
    { id: codigo(), marca: "Glaciar", tamanio: "500 cc", tipo: "Agua mineral", formato: "Botella", precio: 170 },
    { id: codigo(), marca: "Eco de los Andes", tamanio: "500 cc", tipo: "Agua mineral", formato: "Botella", precio: 200 },
    { id: codigo(), marca: "Heineken", tamanio: "500 cc", tipo: "Cerveza", formato: "Lata", precio: 600 },
    { id: codigo(), marca: "Heineken", tamanio: "1 litro", tipo: "Cerveza", formato: "Botella", precio: 1200 },
    { id: codigo(), marca: "Stella Artois", tamanio: "500 cc", tipo: "Cerveza", formato: "Lata", precio: 600 },
    { id: codigo(), marca: "Stella Artois", tamanio: "1 litro", tipo: "Cerveza", formato: "Botella", precio: 1200 },
    { id: codigo(), marca: "Quilmes", tamanio: "500 cc", tipo: "Cerveza", formato: "Lata", precio: 550 },
    { id: codigo(), marca: "Quilmes", tamanio: "1 litro", tipo: "Cerveza", formato: "Botella", precio: 1000 },
    { id: codigo(), marca: "Brahma", tamanio: "330 cc", tipo: "Cerveza", formato: "Lata", precio: 450 },
    { id: codigo(), marca: "Brahma", tamanio: "1 litro", tipo: "Cerveza", formato: "Botella", precio: 800 },
    { id: codigo(), marca: "Coca Cola", tamanio: "330 cc", tipo: "Gaseosa", formato: "Lata", precio: 350 },
    { id: codigo(), marca: "Coca Cola", tamanio: "1.5 litros", tipo: "Gaseosa", formato: "Botella", precio: 800 },
    { id: codigo(), marca: "Sprite", tamanio: "330 cc", tipo: "Gaseosa", formato: "Lata", precio: 300 },
    { id: codigo(), marca: "Sprite", tamanio: "1.5 litros", tipo: "Gaseosa", formato: "Botella", precio: 700 },
    { id: codigo(), marca: "Paso de los toros Pomelo", tamanio: "330 cc", tipo: "Gaseosa", formato: "Lata", precio: 300 },
    { id: codigo(), marca: "Paso de los toros Pomelo", tamanio: "1.5 litros", tipo: "Gaseosa", formato: "Botella", precio: 700 },
    { id: codigo(), marca: "Villa del sur", tamanio: "500 cc", tipo: "Agua con gas", formato: "Botella", precio: 210 },
    { id: codigo(), marca: "Villavicencio", tamanio: "500 cc", tipo: "Agua con gas", formato: "Botella", precio: 250 },
    { id: codigo(), marca: "Eco de los Andes", tamanio: "500 cc", tipo: "Agua con gas", formato: "Botella", precio: 220 },
    { id: codigo(), marca: "Chivas", tamanio: "1 litro", tipo: "Whisky", formato: "Botella", precio: 7000 },
    { id: codigo(), marca: "Johnnie Walker Red Label", tamanio: "1 litro", tipo: "Whisky", formato: "Botella", precio: 12000 },
    { id: codigo(), marca: "Johnnie Walker Black Label", tamanio: "1 litro", tipo: "Whisky", formato: "Botella", precio: 20000 },
    { id: codigo(), marca: "Johnnie Walker Blue Label", tamanio: "1 litro", tipo: "Whisky", formato: "Botella", precio: 90000 },
    { id: codigo(), marca: "Trumpeter Malbec", tamanio: "1 litro", tipo: "Vino", formato: "Botella", precio: 7000 },
    { id: codigo(), marca: "Nicassia Malbec", tamanio: "1 litro", tipo: "Vino", formato: "Botella", precio: 6500 }]

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
    bebidas.sort((a, b)=> {
        if(a.tipo > b.tipo){
            return 1
        } if(a.tipo < b.tipo){
            return -1
        }
        return 0
    })
    console.table(bebidas)
}