//Arrow Function
const encontrarBebida = () => {
    let buscarBebida = prompt("Escribe la bebida que quieres buscar:");
    let buscarIndice = bebidasAlcoholicas.indexOf(buscarBebida);

    if (buscarIndice > -1) {
        alert("Tenemos en stock la bebida: " + buscarBebida);
    } else {
        let confirmacion = confirm("No se encontró la bebida '" + buscarBebida + "' en nuestro catálogo. ¿Quieres agregarla?");
        
        if (confirmacion) {
            agregarBebida(buscarBebida);
            console.log("Muchas gracias por agregar " + buscarBebida + " a nuestro catálogo!")
        } else {
            console.log("Muchas gracias por su visita!");
        }
    }
};

