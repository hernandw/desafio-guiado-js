let nombre = document.querySelector("#nombre");
let asunto = document.querySelector("#asunto");
let mensaje = document.querySelector("#mensaje");
let formulario = document.querySelector("#formulario");



//Funcion para validar los campos del formulario

/* function validar(nombre, asunto, mensaje) {
  let validacion = true;

  let expresion = /[a-zA-Z]/gim;
document.querySelector(".resultado").innerHTML = "";
  if (expresion.test(nombre.value) == false) {
    validacion = false;
    document.querySelector(".errorNombre").innerHTML = "Nombre invalido";
    }
    if (expresion.test(asunto.value) == false) {
      validacion = false;
      document.querySelector(".errorAsunto").innerHTML = "Asunto invalido";
    }
    if (expresion.test(mensaje.value) == false) {
      validacion = false;
      document.querySelector(".errorMensaje").innerHTML = "Mensaje invalido";
    }
    


  return validacion;
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let validacion = validar(nombre, asunto, mensaje);
    
    if (validacion) {
        document.querySelector('.resultado').innerHTML = 'Mensaje de Exito'
        document.querySelector(".errorNombre").innerHTML = ''
         document.querySelector(".errorAsunto").innerHTML = "";
          document.querySelector(".errorMensaje").innerHTML = "";
        

    }
}); */

/* formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nombre.value === "" || asunto.value === "" || mensaje.value === "") {
    alert("Todos los campos son obligatorios");
    return;
  }
  alert("Enviado con exito");
}); */