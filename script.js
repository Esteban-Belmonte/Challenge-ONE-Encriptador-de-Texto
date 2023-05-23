/*Funcion que permite elegir la opcion encriptar o desencriptar el texto
       y al mismo tiempo tiene la validacion de que si hay letras mayusculas y/o caracteres
       especiales salga una advetencia. */

function ConvertirTexto(opcionARealizar) {
  let texto = document.getElementById("textoAConvertir").value;
  let resultado = "";
  let mayusculasYespeciales = /[A-Záéíóúüñ¡¿#$%&]/;

  if (mayusculasYespeciales.test(texto)) {
    resultado =
      "El texto contiene letras mayusculas y/o caracteres especiales, por favor coloque un texto valido";
  } else {
    if (opcionARealizar === "encriptar") {
      resultado = encriptarTexto(texto);
    } else if (opcionARealizar === "desencriptar") {
      resultado = desencriptarTexto(texto);
    }
  }

  document.getElementById("resultado").textContent = resultado;
  console.log(resultado);
  ocultarElementos();
}

function encriptarTexto(texto) {
  let encriptado = "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    switch (letra) {
      case "a":
        encriptado += "ai";
        break;
      case "e":
        encriptado += "enter";
        break;
      case "i":
        encriptado += "imes";
        break;
      case "u":
        encriptado += "ufat";
        break;
      case "o":
        encriptado += "ober";
        break;
      default:
        encriptado += letra;
    }
  }
  return encriptado;
}

function desencriptarTexto(textoEncriptado) {
  let desencriptado = textoEncriptado
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  return desencriptado;
}

/* Funcion que oculta los elementos seleccionados en el codigo HTML y al mismo tiempo muestra
     el boton de "copiar" */
     
function ocultarElementos() {
  let elementosOcultos = document.getElementsByClassName("elementosOcultos");

  for (var i = 0; i < elementosOcultos.length; i++) {
    elementosOcultos[i].hidden = true;
  }

   document.getElementById('botonCopiar').hidden = false;

  /*let elementosVisibles = document.getElementsByClassName("botonCopiar");

  for (var i = 0; i < elementosVisibles.length; i++) {
    elementosVisibles[i].hidden = false;
  } */
}


function copiarTexto() {

let texto = document.getElementById('resultado');
let boton = document.getElementById('botonCopiar');

navigator.clipboard.writeText(texto.textContent);
boton.textContent="Copiado"

} 

function cambiarModo() {
  const body = document.body;
  body.classList.toggle("tema-oscuro");
}
