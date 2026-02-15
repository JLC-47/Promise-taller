
function obtenerEdad(edad) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(edad);
        }, 2000);
    })
}


function verificarMayorEdad(edad) {
    return new Promise((res, rej) => {
        setTimeout(() => {
        if (edad >= 18) {
            res("Eres mayor de edad")
        } else {
            rej("Eres menor de edad")
        }
    }, 2000);
    })
}

obtenerEdad(17)
    .then((edad) => {
        return verificarMayorEdad(edad);
    })
    .then((mensaje) => {
        console.log(mensaje)
    })
    .catch((error) => {
        console.log(error)
    })



