let edad = 18;
if(edad === 18){
    console.log("Puedes votar por primera vez");
} else if (edad > 18) {
    console.log("Puedes votar otra vez");  
} else {
    console.log("No puedes votar porque no eres mayor de edad o eres un alien");
}

// Operator ternary
let number = 1;
let result = number === 1 ? "Soy un número uno" : "No soy un número uno";
console.log(result);