let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

// capturamos los botones

let botonSuma = document.getElementById("btn-sumar");
let botonResta = document.getElementById("btn-restar");

function sumar(num1, num2) {
  return num1 + num2;
}

botonSuma.addEventListener("click", () => {
  let numero1 = parseInt(valor1.value);
  let numero2 = parseInt(valor2.value);

  let resultado = sumar(numero1, numero2);
  document.querySelector(".resultado").innerHTML = resultado;
  valor1.value = "";
  valor2.value = "";
});

function restar(num1, num2) {
  let result = "";
  if (num1 - num2 < 0) {
    result = 0;
  } else {
    result = num1 - num2;
  }

  return result;
}

botonResta.addEventListener("click", () => {
  let numero1 = parseInt(valor1.value);
  let numero2 = parseInt(valor2.value);

  let resultado = restar(numero1, numero2);
  document.querySelector(".resultado").innerHTML = resultado;
  valor1.value = "";
  valor2.value = "";
});
