/* En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo. */

/* Input
solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])

Output
true
false */

function solution(arraySecreto) {
    let firsElement = arraySecreto[0];
    if (typeof firsElement == "string") {
        return true;
    } else {
        return false;
    }
}