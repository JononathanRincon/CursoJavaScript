let nombre = "Jonathan Andres";
let apellido = "Rincon ruiz";
let estudiante = "Estudiante " + nombre +" "+ apellido;
let estudianteMayuscula = estudiante.toUpperCase();
let estudianteMinuscula = estudiante.toLowerCase();
console.log(estudianteMinuscula);
let numLength = estudiante.length;
let OneLenName = estudiante.charAt(11);
let OneLenTwoName = apellido.charAt(0);
let deleteSpan = estudiante.trim().replace(/ /g,"");
let existeBool = estudiante.includes("Jonathan");
console.log(existeBool);