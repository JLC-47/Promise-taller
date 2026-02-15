
function obtenerNumero(num) {
    return new Promise((res) => {
        setTimeout(() => {
            res(num);
        }, 2000);
    })

}



function multiplicarPorDos(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (num === 10) {
                res(num * 2);
            } else {
                rej("Error");
            }

        })
    })

}

obtenerNumero(10)
    .then((num) => {
        return multiplicarPorDos(num);
    })
    .then((resultado) => {
        console.log("Resultado: ", resultado);
    })
    .catch((error) => {
        console.error(error);
    })