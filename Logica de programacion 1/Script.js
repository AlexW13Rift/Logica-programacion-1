let numero1 = Number(prompt("Ingrese el primer número:"));
let numero2 = Number(prompt("Ingrese el segundo número:"));
let numero3 = Number(prompt("Ingrese el tercer número:"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    console.log("Ingresa un número válido");
} else {
}

let mayor;
let medio;
let menor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;

    if (numero2 >= numero3) {
        medio = numero2;
        menor = numero3;
    } else {
        medio = numero3;
        menor = numero2;
    }

} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;

    if (numero1 >= numero3) {
        medio = numero1;
        menor = numero3;
    } else {
        medio = numero3;
        menor = numero1;
    }

} else {
    mayor = numero3;

    if (numero1 >= numero2) {
        medio = numero1;
        menor = numero2;
    } else {
        medio = numero2;
        menor = numero1;
    }
}

if (numero1 === numero2 && numero2 === numero3) {
    console.log("Los tres números son iguales");
}

console.log("Mayor a menor:", mayor, medio, menor);
console.log("Menor a mayor:", menor, medio, mayor);
