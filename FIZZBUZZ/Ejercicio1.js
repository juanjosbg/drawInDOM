// Desarrollo punto 1

// 1. Mostar los numeros del 1 al 100
// 2. si es divisible entre 3 No se debe mostrar el numero y debe mostrar la palabra Fizz
// 3. si es divisible entre 5 No se debe mostrar el numero y debe mostrar la palabra Buzz
// 4. y si es divisible entre 3 y 6 debe escribir FIZZBUZZ


// 1 Forma de hacerlo
var num = 100;
for (var i = 1; i <= num; i++) {
    if (i % 3 == 0) {
        document.write("Fizz");
    }
    if (i % 5 == 0) {
        document.write("Buzz");
    }
    if (i % 3 != 0 && i % 5 != 0) {
        document.write(i);
    }

    document.write("<br/>");
}


// 2 Forma de hacerlo
var numeros = 100;
var divisible = false;

for (var i = 1; i <= numeros; i++) {
    if (esDivisible(i, 3)) {
        document.write("Fizz");
    }
    if (esDivisible(i, 5)) {
        document.write("Buzz");
    }
    if (!esDivisible(i, 3) && !esDivisible(i, 5)) {
        document.write(i);
    }
    document.write("<br />");
}
function esDivisible(num, divisor) {
    if (num % divisor == 0) { return true; }
    else { return false; }
}