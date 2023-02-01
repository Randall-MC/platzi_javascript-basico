// hoisting happens when variables and functions are declared before everything. Only applies for reserved words var and function
console.log(nombre);
var nombre = "Diego";

hey();

function hey() {
    console.log("Hola " + nombre);
}