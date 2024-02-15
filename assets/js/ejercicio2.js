let caja = document.querySelector("#caja");

let boton1 = document.querySelector("#btn-1");
let boton2 = document.querySelector("#btn-2");
let boton3 = document.querySelector("#btn-3");

function cambiarColor(color) {
  caja.style.backgroundColor = color;
}

boton1.addEventListener("click", () => {
  cambiarColor("#e53e3e");
}); 


boton2.addEventListener("click", () => {
  cambiarColor("#dd6b20");
}); 

boton3.addEventListener("click", () => {
  cambiarColor("#faf089");
}); 





//reseteamos todos los atributos
/* boton1.addEventListener('click', () => {
    caja.setAttribute("style", "background-color: red; width: 500px; height: 600px");
}) */