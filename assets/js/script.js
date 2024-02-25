import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./modulo/animal.js";

function agregarDatos() {
  // vincular Variables con HTML
  //Usar Datos
  // id="animal" se rescata el valor de la edad del primer input
  // id="edad" se rescata el valor de la edad del segundo input
  // id="comentarios" se rescata el tercer input string
  // id="preview" donde se muestra la imagen del animal seleccionado en el form tipo de animal
  // id="btnRegistrar" boton del form para registrar los datos
  // id"player" el sonido del animal escogido
  let animal = document.getElementById("animal");
  let edad = document.getElementById("edad");
  let comentarios = document.getElementById("comentarios");
  let btnRegistrar = document.getElementById("btnRegistrar");
  let preview = document.getElementById("preview");
  let player = document.getElementById("player");
}

//Mostrar Datos
// id="Tabla" todo el rectangulo amarillo con el nombre de los animales
// id="Animales" card grande para insertar las tarjetas de animales
