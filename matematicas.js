function add(number_one, number_two) {
    return number_one + number_two;
}

function subtract(number_one, number_two) {
    return number_one - number_two;
}

function multiply(number_one, number_two) {
    return number_one * number_two;
}

function divide(number_one, number_two) {
    if(number_two === 0) {
        console.log('No se puede dividir por 0');
    } else {
        return number_one / number_two;
    }
}

console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));
console.log(divide(1,0));