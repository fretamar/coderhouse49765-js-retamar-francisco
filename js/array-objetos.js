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
                                bebidas.push(codigo(),marca,tamanio,tipo,formato,precio)
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
