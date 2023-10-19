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