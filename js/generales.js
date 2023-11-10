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
    { id: codigo(), marca: "Villa del sur", tamanio: "500 cc", tipo: "Agua mineral", formato: "Botella", imagen: "https://www.paitis.ar/ps/2243-large_default/agua-villa-del-sur-225-litros.jpg", precio: "$"+200 },
    { id: codigo(), marca: "Bonaqua", tamanio: "500 cc", tipo: "Agua mineral", formato: "Botella", imagen: "https://roldanonline.com.ar/wp-content/uploads/2020/07/7790895003868.jpg", precio: "$"+150 },
    { id: codigo(), marca: "Villavicencio", tamanio: "500 cc", tipo: "Agua mineral", formato: "Botella", imagen: "https://carrefourar.vtexassets.com/arquivos/ids/171888/7790315000446_02.jpg?v=637468542321600000", precio: "$"+220 },
    { id: codigo(), marca: "Glaciar", tamanio: "500 cc", tipo: "Agua mineral", formato: "Botella", imagen: "https://hiperlibertad.vtexassets.com/arquivos/ids/191208-800-auto?v=637787433726800000&width=800&height=auto&aspect=true", precio: "$"+170 },
    { id: codigo(), marca: "Eco de los Andes", tamanio: "500 cc", tipo: "Agua mineral", formato: "Botella", imagen: "https://carrefourar.vtexassets.com/arquivos/ids/172113/7792799000011_02_nuevopackk.jpg?v=637468544118170000", precio: "$"+200 },
    { id: codigo(), marca: "Heineken", tamanio: "500 cc", tipo: "Cerveza", formato: "Lata", imagen: "https://www.ccu.com.ar/wp-content/uploads/2021/05/latahaki-copia.png", precio: "$"+600 },
    { id: codigo(), marca: "Heineken", tamanio: "1 litro", tipo: "Cerveza", formato: "Botella", imagen: "https://static.wixstatic.com/media/d2b1c5_4caa9932397e4e25a1058bd8204eb3a5~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d2b1c5_4caa9932397e4e25a1058bd8204eb3a5~mv2.jpg", precio: "$"+1200 },
    { id: codigo(), marca: "Stella Artois", tamanio: "500 cc", tipo: "Cerveza", formato: "Lata", imagen: "https://discouy.vtexassets.com/arquivos/ids/1515903-800-auto?v=638339328988900000&width=800&height=auto&aspect=true", precio: "$"+600 },
    { id: codigo(), marca: "Stella Artois", tamanio: "1 litro", tipo: "Cerveza", formato: "Botella", imagen: "https://rankea.com.ar/wp-content/uploads/2020/10/stella-artois-1-litro.jpg", precio: "$"+1200 },
    { id: codigo(), marca: "Quilmes", tamanio: "500 cc", tipo: "Cerveza", formato: "Lata", imagen: "https://quirinobebidas.com.ar/wp-content/uploads/2020/06/productos-2022-11-23T114702.526.png", precio: "$"+550 },
    { id: codigo(), marca: "Quilmes", tamanio: "1 litro", tipo: "Cerveza", formato: "Botella", imagen: "https://masonlineprod.vtexassets.com/arquivos/ids/272997-800-auto?v=638116617849200000&width=800&height=auto&aspect=true", precio: "$"+1000 },
    { id: codigo(), marca: "Brahma", tamanio: "330 cc", tipo: "Cerveza", formato: "Lata", imagen: "https://www.juliana-delivery.com.ar/uploads/products/detail_products_9288.jpg", precio: "$"+450 },
    { id: codigo(), marca: "Brahma", tamanio: "1 litro", tipo: "Cerveza", formato: "Botella", imagen: "https://www.pasosonline.com.ar/wp-content/uploads/2018/08/BRAHMA-cerveza-botella-x1lt-retornable-e1656946807545.png", precio: "$"+800 },
    { id: codigo(), marca: "Coca Cola", tamanio: "330 cc", tipo: "Gaseosa", formato: "Lata", imagen: "https://distribucionescantarerosierra.es/wp-content/uploads/2020/07/0666-1.jpg", precio: "$"+350 },
    { id: codigo(), marca: "Coca Cola", tamanio: "1.5 litros", tipo: "Gaseosa", formato: "Botella", imagen: "https://acdn.mitiendanube.com/stores/001/273/434/products/7790895004301-9b99363f834f2f8e4115952580898907-1024-1024.jpg", precio: "$"+800 },
    { id: codigo(), marca: "Sprite", tamanio: "330 cc", tipo: "Gaseosa", formato: "Lata", imagen: "https://bicomfiles.s3-sa-east-1.amazonaws.com/ecommerce/417/41742522.jpg", precio: "$"+300 },
    { id: codigo(), marca: "Sprite", tamanio: "1.5 litros", tipo: "Gaseosa", formato: "Botella", imagen: "https://acdn.mitiendanube.com/stores/001/571/448/products/sprite1-6195a0b60d0e41c13616213403572430-640-0.jpg", precio: "$"+700 },
    { id: codigo(), marca: "Paso de los toros Pomelo", tamanio: "330 cc", tipo: "Gaseosa", formato: "Lata", imagen: "https://rojoynegro.com.ar/pedidos/wp-content/uploads/2020/07/3080059_f.jpg", precio: "$"+300 },
    { id: codigo(), marca: "Paso de los toros Pomelo", tamanio: "1.5 litros", tipo: "Gaseosa", formato: "Botella", imagen: "https://acdn.mitiendanube.com/stores/835/701/products/paso-de-los-toros-pomelo-1-5l1-1635e7e1cc181841f616576281513190-1024-1024.jpg", precio: "$"+700 },
    { id: codigo(), marca: "Villavicencio", tamanio: "500 cc", tipo: "Agua con gas", formato: "Botella", imagen: "https://www.libreriasullivan.com.ar/images/000000000000000041499447-005.jpg", precio: "$"+250 },
    { id: codigo(), marca: "Eco de los Andes", tamanio: "500 cc", tipo: "Agua con gas", formato: "Botella", imagen: "https://carrefourar.vtexassets.com/arquivos/ids/172119/7792799000073_01_nuevopackk.jpg?v=637468544143330000", precio: "$"+220 },
    { id: codigo(), marca: "Chivas", tamanio: "1 litro", tipo: "Whisky", formato: "Botella", imagen: "https://hiperlibertad.vtexassets.com/arquivos/ids/186948-800-auto?v=637713912403130000&width=800&height=auto&aspect=true", precio: "$"+7000 },
    { id: codigo(), marca: "Johnnie Walker Red Label", tamanio: "1 litro", tipo: "Whisky", formato: "Botella", imagen: "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63435_default_medium.jpeg", precio: "$"+12000 },
    { id: codigo(), marca: "Johnnie Walker Black Label", tamanio: "1 litro", tipo: "Whisky", formato: "Botella", imagen: "https://whiskypedia.com.ar/wp-content/uploads/2020/06/JW-Black-Lavel-Litro.jpg", precio: "$"+20000 },
    { id: codigo(), marca: "Johnnie Walker Blue Label", tamanio: "1 litro", tipo: "Whisky", formato: "Botella", imagen: "https://d2eebw31vcx88p.cloudfront.net/whisky-boutique/uploads/ec6c10d39a4c0ebcb9ac1f1ac66d683092f65a91.jpg", precio: "$"+90000 },
    { id: codigo(), marca: "Trumpeter Malbec", tamanio: "1 litro", tipo: "Vino", formato: "Botella", imagen: "https://www.superacasa.com.ar/2645-large_default/trumpeter-rutini-wines-sirah-750ml.jpg", precio: "$"+7000 },
    { id: codigo(), marca: "Nicassia Malbec", tamanio: "1 litro", tipo: "Vino", formato: "Botella", imagen: "https://www.mercadodevinos.com.ar/wp-content/uploads/2017/01/nicasia-malbec-catena-zapata_8395_lg.jpg", precio: "$"+6500 }]

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