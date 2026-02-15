function saludar(nombre) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (nombre == "Janier") {
                res("Hola " + nombre + ", bienvenido")
            } else {
                rej("No Teconozco")
            }



        }, 2000);



    })
}

saludar("Janieer")
    .then((message) => {
        console.log("Succes: ", message);
    })

    .catch((message) => {
        console.log("No chabon " ,message);
    })


