//los arrays es imporante que los declaremos con const y no con let para evitar que se puedan pisar mas adelante
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









