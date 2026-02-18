const users = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan.perez@example.com",
  },
  {
    id: 2,
    name: "María Gómez",
    email: "maria.gomez@example.com",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    email: "carlos.rodriguez@example.com",
  },
  {
    id: 4,
    name: "Laura Martínez",
    email: "laura.martinez@example.com",
  },
  {
    id: 5,
    name: "Andrés López",
    email: "andres.lopez@example.com",
  },
];

const main = document.getElementById("main");
const number = document.getElementById("number");
const button = document.getElementById("button");
const number_value = number.value;


function obtenerUsuario(number_value) {
  return new Promise((res, rej) => {
    setTimeout(() =>{
      const user = users.find(u => u.id === Number(number_value));
      if (user) {
        res(alert("Usuario encontrado:\n" +
          "Id: " + user.id + "\n" + "Nombre: " + user.name + "\n" + "Email: " + user.email));
      }else{
        rej("Usuario no encontrado, intente nuevamente")
      }
    }, 2000)
    
  })

}

button.addEventListener("click", () => {
  if (number_value === "") return;
  if (number_value < 0) {
    alert("Valor no permitido, ingrese un valor nuevamente");
  } else if (number_value > 5) {
    alert("Fuera de rango");
  }

  obtenerUsuario(number_value)
  



})

