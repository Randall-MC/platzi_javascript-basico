// This variable can be used anywhere because it was created in the global scope
let nombre = "Juan";

// The variable apellido is in a local scope because is inside of a function and can't be accessed from outside
function nombreCompleto() {
    let apellido = "Martinez";
    return `${nombre} ${apellido}`
}

nombre;
nombreCompleto();
apellido;