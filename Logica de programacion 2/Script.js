let celsius;
let entrada;

do{
    entrada = prompt("Ingresa la temperatura en grados Celsius:");

    if(entrada === null){
        alert("Operación cancelada.");
        break;
    }

    entrada = entrada.trim();

    if(entrada === "" || !Number.isFinite(Number(entrada))){
        alert("Error: debes ingresar un número válido.");
        continue;
    }

    celsius = Number(entrada);
    break;

}while(true);

    let Kelvin = celsius + 273.15;
    let Fahrenheit = (celsius * 9/5) + 32;

console.log("Grados Kelvin: " + Kelvin.toFixed(2));
console.log("Grados Fahrenheit: " + Fahrenheit.toFixed(2));