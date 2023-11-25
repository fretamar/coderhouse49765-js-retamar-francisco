//Formulario

const formNombre = document.querySelector("input#formNombre")
const formEdad = document.querySelector("input#formEdad")
const formIngreso = document.querySelector("input#formIngreso")
const formEmail = document.querySelector("input#formEmail")
const formEnviar = document.querySelector("button#formEnviar")

function guardarDatos() {
    const datosFormulario = {
        nombre: formNombre.value,
        edad: formEdad.value,
        email: formEmail.value,
        fechaIngreso: formIngreso.value
    }

    localStorage.setItem("datosForm", JSON.stringify(datosFormulario))

}

function recuperarDatos(){
    let datosForm = JSON.parse(localStorage.getItem("datosForm"))
    console.log(datosForm)
}

formEnviar.addEventListener("click", guardarDatos)


//JSON --> Paradigma de formato de transporte de datos, hace un intercambio de información entre cliente-servidor de una manera clara y simple. Reemplaza XML



